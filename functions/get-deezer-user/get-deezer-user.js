const fetch = require("node-fetch")

exports.handler = function(event, _, callback) {
  const id = event.queryStringParameters.id
  const USER_URL = `https://api.deezer.com/user/${id}`

  getDeezerFlow(USER_URL)
    .then(data => {
      respond(200, data)
    })
    .catch(e => {
      respond(404, { msg: "User not found" })
    })

  function respond(status, data) {
    callback(null, {
      statusCode: status,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}

async function getDeezerFlow(USER_URL) {
  try {
    const response = await fetch(USER_URL)
    const user = await response.json()
    return user
  } catch {
    return Error("Error: cannot retrieve user data.")
  }
}
