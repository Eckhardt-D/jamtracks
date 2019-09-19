const request = require("request")
const headers = {
  "Access-Control-Allow-Origin": "*"
}

exports.handler = function(event, _, callback) {
  const id = event.queryStringParameters.id
  const USER_URL = `https://api.deezer.com/user/${id}`

  request(USER_URL, (error, _, body) => {
    if (error) {
      return callback(null, {
        statusCode: 404,
        body: "Error getting user info",
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
