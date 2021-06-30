function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  e.target.classList.remove('playing')
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const pianoKey = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (!audio) return
  pianoKey.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}

const pianoKeys = document.querySelectorAll('.piano-key')
pianoKeys.forEach((key) =>
  key.addEventListener('transitionend', removeTransition)
)
window.addEventListener('keydown', playSound)

//=================

const piano = document.querySelector('.piano')
const body = document.querySelector('.body')

const startSound = (e) => {
  startSoundWithMouse(e)
}

function stopSound(e) {
  e.target.classList.remove('playing')
}

const startSoundWithMouse = (e) => {
  const audio = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`
  )
  if (!audio) return
  e.target.classList.add('playing')
  audio.currentTime = 0
  audio.play()
  pianoKeys.forEach((key) => {
    key.addEventListener('mouseover', startSound)
    key.addEventListener('mouseout', stopSound)
  })
}
const stopSoundWithMouse = () => {
  pianoKeys.forEach((key) => {
    key.removeEventListener('mouseover', startSound)
    key.removeEventListener('mouseout', stopSound)
  })
}
piano.addEventListener('mousedown', startSoundWithMouse, false)
body.addEventListener('mouseup', stopSoundWithMouse)
//==========================

const buttonLetters = document.querySelector('.btn-letters')
const buttonNotes = document.querySelector('.btn-notes')

buttonLetters.addEventListener('click', () => {
  buttonLetters.classList.add('btn-active')
  pianoKeys.forEach((key) => {
    key.classList.add('piano-key-letter')
  })
  buttonNotes.classList.remove('btn-active')
})

buttonNotes.addEventListener('click', () => {
  buttonNotes.classList.add('btn-active')
  pianoKeys.forEach((key) => {
    key.classList.remove('piano-key-letter')
  })
  buttonLetters.classList.remove('btn-active')
})

//============================
const fullScreen = document.querySelector('.fullscreen')

function setFullScreen() {
  document.documentElement.requestFullscreen()
}
function removeFullScreen() {
  document.exitFullscreen()
}
let isFullScreen = false
function checkFullScreen() {
  if (isFullScreen) {
    isFullScreen = false
    removeFullScreen()
  } else {
    isFullScreen = true
    setFullScreen()
  }
}
fullScreen.addEventListener('click', checkFullScreen)
//=======================
