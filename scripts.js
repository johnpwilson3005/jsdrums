// looks for keydowns on anything with a class of key, plays associated audio, adds class of 'playing' for transition effect
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; //stops the function from continually firing
  audio.currentTime = 0; //lets you play the same sounds quickly
  audio.play();
  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing');
});
//function to remove transition effect
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));// calling function on eventListener
