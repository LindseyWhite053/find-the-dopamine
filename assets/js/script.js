var jokeFind = function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => console.log(data));
};
//documentation found at https://sv443.net/jokeapi/v2/

jokeFind();

var memeFind = function() {
    fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
    .then(response => response.json())
    .then(data => console.log(data));
};
// documentation found at https://imgflip.com/api

memeFind();


