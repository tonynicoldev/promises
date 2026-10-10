// If an error occurs, we need to detect and handle it. Take m off random to create 404
// Take m off .com to create a catastrophic runtime error - app will crash without catch
async function getJoke() {
  let url = 'https://official-joke-api.appspot.com/jokes/random'
  try {
    let response = await fetch(url) // Response 404 is not a runtime error
    if (!response.ok) 
      throw new Error(response.status)
    let jsonObj = await response.json()

    // Or output to the web page
    document.getElementById("setup").textContent = jsonObj.setup
    document.getElementById("punchline").textContent = jsonObj.punchline
  } catch (error) {   
    console.log("Error returned by server is:", error)  // Could display a message: Site unavailable or url incorrect or whatever
    document.getElementById("error").textContent = "Our service is experiencing a problem. Please try again later." 
  }

  console.log('Code carries on after catch as not terminal.')
}


getJoke()
console.log('Output some nonsense just to show the app thread is not blocked')