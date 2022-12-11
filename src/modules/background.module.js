import { Module } from '../core/module'
import { getRandomColor } from '../utils'

export class BackgroundModule extends Module {
  // #setColor() {
  //   document.body.style.backgroundColor = getRandomColor()
  //   setTimeout(() => {
  //   document.body.style.transition = "background-color 1s"
  //   document.body.style.backgroundColor = 'initial'
  // }, 1000)
  // }

  async #setColor() {
    document.body.style.backgroundColor = getRandomColor()
    await new Promise(resolve => {
          setTimeout(() => resolve(), 1000)
    })
    document.body.style.transition = "background-color 1s"
    document.body.style.backgroundColor = 'initial'
    await new Promise(resolve => setTimeout(() => resolve(), 1000))
  }

  trigger(){
    this.#setColor()
  } 
}