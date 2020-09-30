const firebase = require('firebase/app')
require('firebase/firestore')
const firebaseConfig = {
  apiKey: process.env.apiKey,
  projectId: process.env.projectId,
}

if (!firebase.apps.length) {
  firebase.default.initializeApp(firebaseConfig);
}
const db = firebase.default.firestore()

const formatDate = (date) => {
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  return year + month.padStart(2, '0') + day.padStart(2, '0')
}

const sundown = (now) => {
  const sunRise = new Date(), sunSet = new Date();
  sunRise.setHours(6)
  sunRise.setMinutes(0)
  sunSet.setHours(21)
  sunSet.setMinutes(0)

  if (now < sunRise) {
    return true
  }

  if (now > sunSet) {
    return true
  }

  return false
}

async function getDateDoc(documentPath) {
  const dateRef = db.collection('date').doc(documentPath)
  return await dateRef.get();
}

async function getTypeDoc(type) {
  const typeRef = db.collection('day-type').doc(type)
  return await typeRef.get();
}

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    console.log(`--> method not supported`)
    return {
      statusCode: 405,
      body: JSON.stringify({error: 'Method not allowed'}),
      headers: {'Cache-Control': 'public, max-age=604800'}}
  }

  const date = new Date()

  if (sundown(date)) {
    console.log(`--> sun is down`)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          description: 'Er wordt niet gevlagd als de zon onder is.',
          flagState: 'Lowered',
          foreground: [],
          background: 'night'
        },
      ),
      headers: {
        'Cache-Control': 'public, max-age=3600',
      }
    }
  }

  const fallbackResponse = {
    statusCode: 200,
    body: JSON.stringify(
      {
        description: 'Er is vandaag geen reden om de vlag te voeren.',
        flagState: 'Lowered',
        foreground: [],
        background: 'day'
      }
    ),
    headers: {
      'Cache-Control': 'public, max-age=3600',
    }
  };

  const documentPath = formatDate(date);

  const dateDoc = await getDateDoc(documentPath);

  if (!dateDoc.exists) {
    console.log(`--> document ${documentPath} not found in firestore`)
    return fallbackResponse
  }

  console.log(`--> document ${documentPath} found, querying type data`)

  const type = dateDoc.data().type;
  const typeDoc = await getTypeDoc(type);

  if (!typeDoc.exists) {
    console.log(`---> no data found for type: ${type}`)
    return fallbackResponse
  }

  return {
    statusCode: 200,
    body: JSON.stringify(typeDoc.data()),
    headers: {
      'Cache-Control': 'public, max-age=3600',
    }
  }
}

