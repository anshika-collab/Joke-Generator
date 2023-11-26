console.log("Welcome to the Lobster Club Improv Comedy Show!");
const btn = document.getElementById("button");
console.log("Button?: ", btn);

btn.addEventListener("click", (event) => {
    getJoke();
});

async function getJoke() {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch("https://icanhazdadjoke.com/", options);
      const responseAsJson = await response.json();
      console.log(responseAsJson);
      document.getElementById("joke").innerText = responseAsJson.joke;
    } 
	catch (error) {
      console.log(error);
    }
  
}