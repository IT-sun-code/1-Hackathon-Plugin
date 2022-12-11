import {Module} from '../core/module'
import { random, getRandomColor, remove } from '../utils'

export class GameModule extends Module {
  #minSize
  #maxSize
  #screenWidth
  #screenHeight
  constructor(type, text) {
    super(type, text)
    this.#minSize = 50
    this.#maxSize = 150
    this.#screenWidth = document.body.clientWidth
    this.#screenHeight = document.body.clientHeight
  }

  #createBug() {
    const width = random(this.#minSize, this.#maxSize)
    const height = random(this.#minSize, this.#maxSize)
    const coordX = random(0, this.#screenWidth - width)
    const coordY = random(0, this.#screenHeight - height)
    const color = getRandomColor()

    return {
      width,
      height,
      coordX,
      coordY,
      color,
    }
  }

  #paint(shapeParams) {
    const div = document.createElement('div')
    div.style.backgroundColor = shapeParams.color
    div.style.width = `${shapeParams.width}px`
    div.style.height = `${shapeParams.height}px`
    div.style.top = `${shapeParams.coordY}px`
    div.style.left = `${shapeParams.coordX}px`
    div.style.borderRadius = '50%'
    div.style.position = 'absolute'
    document.body.append(div)
    return div
  }

  #createAlert() {
    const customAlert = document.createElement('button')
    customAlert.className = 'alert'
    customAlert.innerText = 'Вы поймали цветного жука, поздравляем!!!'
    customAlert.style.width = '400px'
    customAlert.style.height = '100px'
    customAlert.style.position = 'absolute'
    customAlert.style.left = '30%'
    customAlert.style.top = '30%'
    // customAlert.style.transform = "translate(-50%, -50%)"
    document.body.append(customAlert)
    return customAlert
  }

  trigger() {
    const shape = this.#createBug()
    const element = this.#paint(shape)
    element.addEventListener('mouseenter', () => {
        element.style.left = `${random(0, 90)}%`
        element.style.top = `${random(0, 90)}%`
        element.style.transition = 'all 1s linear 0s'
    })
    element.addEventListener('click', () => {
        remove(element, 1000)
        remove(this.#createAlert(), 5000)
    })
    remove(element, 10000)
  }
}