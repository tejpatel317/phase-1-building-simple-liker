// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function hideError(){
  document.getElementById("modal").className = "hidden"};

hideError();


const hearts = document.getElementsByClassName("like-glyph");

function addHeart() {
  for (const heart of hearts) {
  heart.addEventListener('click', (e) => {
    mimicServerCall()
    .then(resp => {
      if (heart.className === "like-glyph activated-heart") {
        heart.textContent=EMPTY_HEART;
        heart.className = "like-glyph"
      }
      else if (heart.className === "like-glyph") {
      heart.textContent=FULL_HEART;
      heart.className="like-glyph activated-heart"}})
    .catch((error) => {
      console.log(error)
      document.getElementById("modal").className =""
      setTimeout(hideError, 3000)
    })
  });
}}

addHeart();


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
