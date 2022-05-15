var imageEl = document.querySelector("#joke-image");

// pull a joke from the outside API found at https://sv443.net/jokeapi/v2/
var jokeFind = function() {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        //clear the current image   
        imageEl.innerHTML=""

        if (data.type == "twopart"){

            // show the Joke setup
            var jokeEl = document.createElement("p")
            jokeEl.textContent = data.setup
            imageEl.appendChild(jokeEl);
            
            //pull the data for the puchline 
            var punchlineEl = document.createElement("p")
            punchlineEl.textContent = data.delivery

            //create a button to show the punchline 
            
            var punchlineBtn = document.createElement("button")
            punchlineBtn.addAttribute = "joke-btn";
            punchlineBtn.className = "answer-button";
            punchlineBtn.textContent = "Punch";
            

            imageEl.appendChild(punchlineBtn);
            
            // function to show the punchline
            var getPunchline = function() {
                punchlineBtn.style.display = "none"
                imageEl.appendChild(punchlineEl);
            };
            
            punchlineBtn.addEventListener("click", getPunchline);

        }; 

        // show the Joke setup
        var singleJokeEl = document.createElement("p")
        singleJokeEl.textContent = data.joke
        imageEl.appendChild(singleJokeEl);

    });
};

//documentation found at https://sv443.net/jokeapi/v2/





// var memeFind = function() {
    //     fetch('https://api.imgflip.com/get_memes')
    //     .then(response => response.json())
    //     .then(data => console.log(data.data.memes[0]));
    // };
    // documentation found at https://imgflip.com/api
    
    // memeFind();
    
    // let happy = document.querySelector(".happy");
    
    // let audioArr = document.getElementsByTagName("audio");
    // console.log(audioArr)

    // happy.addEventListener('mouseenter', ()=>{
        //     audioArr[0].play()
        // });
        
    document.querySelector("#joke-btn").addEventListener("click", jokeFind);