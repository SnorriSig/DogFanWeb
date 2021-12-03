console.log("Script breed loaded")
let breedNames = [];
// Get the list of all breeds 
const apiListBreeds = "https://dog.ceo/api/breeds/list/all";
fetch(apiListBreeds)
  .then(response => response.json())
  .then(breedsList => {
    console.log(breedsList);
    for (const breed in breedsList.message) {
      breedNames.push(breed);
      console.log(breed);
      // 1. Create an element in js
      const listTag = document.createElement("li");
      // 2. innerHTML of the h2 to the answer from the server
       listTag.textContent = breed[0].toUpperCase() + breed.slice(1);
       // 3. Append the h2 to the document
       const list = document.querySelector("#listOfBreeds");
       list.appendChild(listTag);
    }
renderBreedNames();

  });

  // Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
  // Display the name of the breed under the image

  function renderBreedNames() {
  let ranNum = Math.floor(Math.random() * 96);
  const apiBreedUrl = `https://dog.ceo/api/breed/${breedNames[ranNum]}/images/random`;
  fetch(apiBreedUrl)
  .then(response => response.json())
  .then(breedImg => {
    const breedImage = breedImg.message;
      console.log(breedImage);
      const imgElement = document.querySelector(".randomBreedImage");
      imgElement.setAttribute('src',breedImage);
     
      // Entering title
      const imgTitle = document.querySelector('h2');
      const breedName = `${breedNames[ranNum]}`;
      imgTitle.textContent = "Dog of the day - " + breedName[0].toUpperCase() + breedName.slice(1) + ' -';
  });
}

//const apiBreedImg = `https://dog.ceo/api/breed/${breed}/images/random`;
