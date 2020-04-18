//Question 1
(a, b) => a - b;


//Question 2
const mainUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(mainUrl)
.then(function(response) {
  return response.json();
})
.then(function(json) {
    listGames(json);
})
.catch(function(error) {
    document.location.href = "error.html";
});


function listGames(json) {
    const gameNames = json.results
for (let i = 0; i <gameNames.length; i++){
    console.log(gameNames[i].name);
}
}


//Question 3
let theString = "These cats are outrageous.";
let formattedAnimals = theString.replace("cats","giraffes");


//Question 4
const searchUrl = new URL("https://my.site.com?userId=7");

const params = new URLSearchParams(searchUrl.search);
console.dir(params);

userIDvalue = "";

if(params.has("userId")) {
    userIDvalue = params.get("userId");
    console.log("Got it!");
    console.log(userIDvalue);
        
    if (userIDvalue < 10){
        document.location.href = "first.html";
    } else if (userIDvalue >= 10) {
        document.location.href = "second.html";
    }

} else {
    console.log("Did not find userId parameter");
    document.location.href = "third.html";
}


//Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);


//Question 6
const animalContainer = document.querySelector(".animals");


const listElement = document.createElement("li");
console.log(listElement);

listElement.className = "parrots";

const listContent = document.createTextNode("Parrots");

listElement.appendChild(listContent);
console.log(listElement);

animalContainer.appendChild(listElement);

const elephantContainer = document.querySelector(".elephants");

elephantContainer.before(listElement);


//Question 7
const secondMainUrl = "https://api.rawg.io/api/games/3801";

fetch(secondMainUrl)
.then(function(response) {
  return response.json();
})
.then(function(json) {
    returnedJson(json);
})
.catch(function(error) {
    console.dir(error);
});


function returnedJson(json) {
    const ratingContainer = document.querySelector(".rating");
    const jsonRating = json.rating;
    const jsonRatingContent = document.createTextNode(jsonRating);
    ratingContainer.appendChild(jsonRatingContent);
}
