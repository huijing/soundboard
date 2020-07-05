const buttons = document.querySelectorAll('button');

[...buttons].forEach(button => {
  button.addEventListener('click', evt => {
    const soundId = evt.target.dataset.sound
    playSound(soundId)
  })
})

function playSound(element) {
  document.getElementById(element).play()
}
