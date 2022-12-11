import {Module} from '../core/module'
import { random, getRandomColor, remove } from '../utils'

export class ShapeModule extends Module {
  #minSize
  #maxSize
  #screenWidth
  #screenHeight
  constructor(type, text) {
    super(type, text)
    this.#minSize = 100
    this.#maxSize = 500
    this.#screenWidth = document.body.clientWidth
    this.#screenHeight = document.body.clientHeight
  }

  #generateShape() {
    const width = random(this.#minSize, this.#maxSize)
    const height = random(this.#minSize, this.#maxSize)
    const coordX = random(0, this.#screenWidth - width)
    const coordY = random(0, this.#screenHeight - height)
    const color = getRandomColor()
    const borderRadius = random(0, 50)

    return {
      width,
      height,
      coordX,
      coordY,
      color,
      borderRadius,
    }
  }

  #draw(shapeParams) {
    const div = document.createElement('div')
    div.style.backgroundColor = shapeParams.color
    div.style.width = `${shapeParams.width}px`
    div.style.height = `${shapeParams.height}px`
    div.style.position = 'absolute'
    div.style.top = `${shapeParams.coordY}px`
    div.style.left = `${shapeParams.coordX}px`
    div.style.borderRadius = `${shapeParams.borderRadius}%`
    document.body.append(div)
    return div
  }
    
  trigger() {
    const shape = this.#generateShape()
    const element = this.#draw(shape)
    remove(element, random(2000, 5000))
  }
}