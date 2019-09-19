const request = require("request")

const headers = {
  "Access-Control-Allow-Origin": "*"
}

exports.handler = function(event, _, callback) {
  const id = event.queryStringParameters.id
  const TRACKS_URL = `https://api.deezer.com/user/${id}/tracks`

  request.get(TRACKS_URL, (error, response, body) => {
    if (error) {
      return callback({
        statusCode: 500,
        body: "Error fetching user",
        headers
      })
    }
    callback(null, {
      statusCode: 200,
      body,
      headers
    })
  })
}

// 1723339282
