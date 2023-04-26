// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function failureStatus(err) {
  const hiddenClass = document.querySelector('.hidden');
  hiddenClass.style.visibility = 'visible';
  const p = document.querySelector('#modal-message');
  p.innerText = err;
  setTimeout(() => {
    hiddenClass.style.visibility = 'hidden';
  }, 3000);
};



function liking() {
  const items = document.querySelectorAll('.like-glyph');
  items.forEach(element => {
    element.addEventListener('click', () => {
      const myPromise = mimicServerCall();
      myPromise
        .then(() => {
          if (element.innerText === EMPTY_HEART) {
            element.innerText = '♥';
          } else if (element.innerText === FULL_HEART) {
            element.innerText = '♡';
          }
        })
        .catch(err => failureStatus(err))
    });
  })
};

liking()



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
