const loadConfig = (envData) => {
  console.log(envData)
  const env = {
    apiKey: envData.apiKey,
    projectId: envData.projectId,
  }
  console.log(env)
  if (env.apiKey === undefined || env.projectId === undefined) {
    console.log('loading from file')
    return require('./firebaseConfig')
  }
  console.log('loading from env')
  return env
}


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

exports.formatDate = formatDate
exports.sundown = sundown
exports.loadConfig = loadConfig
