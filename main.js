console.log("Script main loaded");

// Get a random dog image and display it in the browser
// Get a new image every 2 sec.
const apiRanImg = "https://dog.ceo/api/breeds/image/random";
function callme() {
  networkPromise = fetch(apiRanImg)
    .then((Response) => Response.json())
    .then((randomImg) => {
      //console.log(randomImg);
      // Select home for img
      //console.log(randomImg.message);
      const url = randomImg.message;
      const imgTag = document.querySelector(".randomImg");
      // Clean the home if someone has lived there before.
      imgTag.innerHTML = "";
      imgTag.setAttribute("src", url);

      //This promise will resolve when 2 seconds have passed
      const timeOutPromise = new Promise(function (resolve, reject) {
        // 2 Second delay
        setTimeout(resolve, 2000, "Timeout Done");
      });
      Promise.all([networkPromise, timeOutPromise]).then(function (values) {
        //console.log("Atleast 2 secs + TTL (Network/server)");
        //Repeat
        callme();
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
callme();

