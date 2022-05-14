var jokeFind = function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => console.log(data));
};
//documentation found at https://sv443.net/jokeapi/v2/

jokeFind();

// var memeFind = function() {
//     fetch('https://api.imgflip.com/get_memes')
//     .then(response => response.json())
//     .then(data => console.log(data.data.memes[0]));
// };
// documentation found at https://imgflip.com/api

// memeFind();

