exports.success = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Cache-Control': 'public, max-age=3600, immutable',
    }
  }
}

exports.fallback = {
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
    'Cache-Control': 'public, max-age=3600, immutable',
  }
}

exports.sundown = {
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
    'Cache-Control': 'public, max-age=3600, immutable',
  }
}

exports.methodNotAllowed = {
  statusCode: 405,
  body: JSON.stringify(
    {
      error: 'Method not allowed'
    }
  ),
  headers: {
    'Cache-Control': 'public, max-age=3600, immutable'
  }
}
