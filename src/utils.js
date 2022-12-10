import { colors } from './constants'

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  return colors[random(0, colors.length - 1)]
}