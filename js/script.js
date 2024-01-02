//Spam

let span1 = document.querySelector(".span-1")
let span2 = document.querySelector(".span-2")
let span3 = document.querySelector(".span-3")

//ScrollReveal

ScrollReveal().reveal('.slide-up', {
  distance: '50%',
  origin: 'bottom',
  opacity: '0',
  delay: 250,
  duration: 250,
  reset: true
})


//ANIMATION SPAM

function displaySpan(message) {
  for (let i = 0; i <= 10; i++) {
    setTimeout(function(nr) {
      span1.innerHTML = message + i;
    }, i * 3000 / 10, i)
  }
  for (let i = 0; i <= 13; i++) {
    setTimeout(function(nr) {
      span2.innerHTML = message + i;
    }, i * 3000 / 13, i)
  }
  for (let i = 0; i <= 400; i++) {
    setTimeout(function(nr) {
      span3.innerHTML = message + i;
    }, i * 3000 / 400, i)
  }
}

displaySpan("+");