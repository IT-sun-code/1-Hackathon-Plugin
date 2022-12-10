import {Module} from '../core/module'
import {getRandomColor} from '../utils'

export class BackgroundModule extends Module {
  async #getColor() {
    document.body.style.backgroundColor = getRandomColor()
    await new Promise(resolve => {
      setTimeout(() => resolve(), 1000)
    })
  }
  trigger(){
    this.#getColor() 
  } 
}