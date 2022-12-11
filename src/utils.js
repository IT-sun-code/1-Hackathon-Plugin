import { colors } from './constants'

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  return colors[random(0, colors.length - 1)]
}

export async function remove(element, time) {
  element.style.transition = "background-color 1s"
  await new Promise(resolve => {
    setTimeout(() => resolve(), time - 1000)
  })
  element.style.backgroundColor = "transparent"
  await new Promise(resolve => setTimeout(() => resolve(), 1000)) 
  element.remove()
}