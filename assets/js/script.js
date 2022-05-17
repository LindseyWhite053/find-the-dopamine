var imageEl = document.querySelector("#joke-image");
var content = {
  Media: "",
  url: "",
  Joke: "",
  Setup: "", 
  Punchline: ""
}

var savedContent = JSON.parse(localStorage.getItem ("existingContent")) || []

var saveFavorites = function (){
  //define the values of the new favorite object using API data
  var content = {
    Media: data.type,
    url: data.url,
    Joke: data.joke,
    Setup: data.setup, 
    Punchline: data.delivery,
  }

  // push object into the array 
  // savedContent.push(content)

  // save to local storage

    console.log(content);
}


// pull a joke from the outside API found at https://sv443.net/jokeapi/v2/
var jokeFind = function () {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //clear the current image
      imageEl.innerHTML = "";

        //create a div container
        var jokeContainer = document.createElement("div")
        jokeContainer.className = "content-return"        
        imageEl.appendChild(jokeContainer);

      if (data.type == "twopart") {
        // show the Joke setup
        var jokeEl = document.createElement("p");
        jokeEl.textContent = data.setup;
        jokeContainer.appendChild(jokeEl);

        //pull the data for the puchline
        var punchlineEl = document.createElement("p");
        punchlineEl.textContent = data.delivery;

        //create a button to show the punchline

        var punchlineBtn = document.createElement("button");
        punchlineBtn.addAttribute = "joke-btn";
        punchlineBtn.className = "answer-button button";
        punchlineBtn.textContent = "Punch";

        jokeContainer.appendChild(punchlineBtn);

        // function to show the punchline
        var getPunchline = function () {
          punchlineBtn.style.display = "none";
          jokeContainer.appendChild(punchlineEl);
        };

        punchlineBtn.addEventListener("click", getPunchline);
      }

      // show the Joke setup
      var singleJokeEl = document.createElement("p");
      singleJokeEl.textContent = data.joke;
      jokeContainer.appendChild(singleJokeEl);
    });

    
};



// documentation found at https://imgflip.com/api & https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
var memeFind = function() {
    fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //remove minion img 
        imageEl.innerHTML=""

        //show meme img
        var memeEl= document.createElement("img")
        memeEl.setAttribute('src', data.url)
        imageEl.appendChild(memeEl);
    })
};


document.querySelector("#meme-btn").addEventListener("click", memeFind);
    
    let happy = document.querySelector(".happy");
    
    let audioArr = document.getElementsByTagName("audio");

    happy.addEventListener('mouseenter', ()=>{
            audioArr[0].play()
         });
        
   document.querySelector("#joke-btn").addEventListener("click", jokeFind);
   document.querySelector("#favoriteBtn").addEventListener("click", saveFavorites);