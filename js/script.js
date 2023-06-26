
//ScrollReveal
window.sr = ScrollReveal({ reset: true });
//
sr.reveal('.area', {
    rotate: { x: 100, y: 100, z: 0},
    duration: 2000
});

//
var slideUp = {
  distance: '100%',
  origin: 'bottom',
  opacity: null,
  delay: 250,
  duration: 500,
  reset: true
}

ScrollReveal().reveal('.slide-up', {
  distance: '50%',
  origin: 'bottom',
  opacity: '0',
  delay: 250,
  duration: 250,
  reset: true
})

//
ScrollReveal().reveal('.item', { delay: 250 });
ScrollReveal().reveal('.item', { duration: 500 });
ScrollReveal().reveal('.item', { delay: 375, reset: true });

ScrollReveal().reveal('.item', {
  delay: 375,
  duration: 500,
  reset: true
});
