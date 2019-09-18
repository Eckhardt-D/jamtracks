const fetch = require("node-fetch")
let lastRequest = ""
let cache = {}

exports.handler = function(event, context, callback) {
  const DEEZER_URL = "https://api.deezer.com/user/1723339282/tracks"
  const now = Date.now()

  if (lastRequest !== "" && now - lastRequest < 30 * 60 * 1000 && cache.data) {
    console.log("responding with cache")
    respond(cache)
  } else {
    console.log("responding with fetch")
    getDeezerFlow(DEEZER_URL)
      .then(data => {
        cache = data
        lastRequest = Date.now()
        respond(data)
      })
      .catch(e => console.log(e))
  }

  function respond(data) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}

async function getDeezerFlow(URL) {
  const response = await fetch(URL)
  const data = await response.json()
  cache = data
  return data
}
