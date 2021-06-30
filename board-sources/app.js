const board = document.querySelector('#board')
const SQUARE_NUMBER = 450
const colors = [
  'rgb(236, 38, 236)',
  'rgb(182, 12, 182)',
  'rgb(182, 12, 125)',
  'rgb(151, 0, 101)',
  'rgb(240, 116, 198)',
  'rgb(247, 59, 184)',
  'rgb(175, 0, 117)',
  'rgb(247, 181, 225)',
]

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.backgroundColor = 'rgb(255, 175, 255)'
  element.style.boxShadow = '0 0 2px rgb(255, 175, 255)'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
