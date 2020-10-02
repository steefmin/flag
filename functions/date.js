const firebase = require('firebase/app')
require('firebase/firestore')

const helpers = require('./date/helpers')
const response = require('./date/responses')

if (!firebase.apps.length) {
  firebase.default.initializeApp(
    helpers.loadConfig(process.env)
  )
}
const db = firebase.default.firestore()

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
    return response.methodNotAllowed
  }

  const date = new Date()
  if (helpers.sundown(date)) {
    return response.sundown
  }

  const dateDoc = await getDateDoc(helpers.formatDate(date))
  if (!dateDoc.exists) {
    return response.fallback
  }

  const typeDoc = await getTypeDoc(dateDoc.data().type)
  if (!typeDoc.exists) {
    return response.fallback
  }

  return response.success(
    typeDoc.data()
  )
}
