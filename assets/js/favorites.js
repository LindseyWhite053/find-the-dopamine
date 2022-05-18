var imageEl = document.querySelector("#joke-image");

var showFavorites = function() {
    // get existing favorites from the local storage
    var savedContent = JSON.parse(localStorage.getItem ("existingContent"))


    if (!savedContent) {

        //create a div container
        var jokeContainer = document.createElement("div")
        jokeContainer.className = "content-return"        
        imageEl.appendChild(jokeContainer);
        
        // notify the user they have no favorites
        var noticeEl = document.createElement("p");
        noticeEl.textContent = "No Favorites To Display"
        jokeContainer.appendChild(noticeEl);
/*
        window.addEventListener("load", function(){
            setTimeout(
                function open(event){
                    document.querySelector(".popup").style.display = "block";
                },
                1000
            )
        });
        document.querySelector("#close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none";
        });
*/
    }
    else {

        //for each item in the array execute the following actions
        for (var i = 0 ; i < savedContent.length; i++) {
        
            //if two part joke append joke, punchline button, and punchline 
            if (savedContent[i].media === "twopart") {

                //create a div container
                var jokeContainer = document.createElement("div")
                jokeContainer.className = "favorite-return card"        
                imageEl.appendChild(jokeContainer);

                // show the Joke setup
                var jokeEl = document.createElement("p");
                jokeEl.textContent = savedContent[i].setup;
                jokeContainer.appendChild(jokeEl);

                //pull the data for the puchline
                var punchlineEl = document.createElement("p");
                punchlineEl.setAttribute("id", "democlass");
                punchlineEl.textContent = savedContent[i].punchline;

                //create a button to show the punchline

                var punchlineBtn = document.createElement("button");
                punchlineBtn.setAttribute = ("id", "joke-btn");
                punchlineBtn.className = "answer-button button";
                punchlineBtn.textContent = "Punch";

                // jokeContainer.appendChild(punchlineBtn);

                // function to show the punchline
                // var getPunchline = function () {
                // punchlineBtn.style.display = "none";
                jokeContainer.appendChild(punchlineEl);
                // };

                // punchlineBtn.addEventListener("click", getPunchline);
            
            }
            //if oneliner append joke 
            else if (savedContent[i].media === "single") {
            
                //create a div container
                var jokeContainer = document.createElement("div")
                jokeContainer.className = "favorite-return card"        
                imageEl.appendChild(jokeContainer);

                // show the Joke 
                var singleJokeEl = document.createElement("p");
                singleJokeEl.textContent = savedContent[i].joke;
                jokeContainer.appendChild(singleJokeEl);
                }
                //if meme display image 
            else if (savedContent[i].media === "meme"){

                //create a div container
                var jokeContainer = document.createElement("div")
                jokeContainer.className = "favorite-return card"        
                imageEl.appendChild(jokeContainer);

                //show meme img
                var memeEl= document.createElement("img")
                memeEl.setAttribute('src', savedContent[i].url)
                jokeContainer.appendChild(memeEl);
            }   
        }
    }
}

showFavorites();