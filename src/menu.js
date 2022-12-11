import {Menu} from './core/menu'
import {mainPage} from './constants'

export class ContextMenu extends Menu {
  #currentSelectedItem
  #moduleItems

  constructor(el) {
    super(el)
    this.#moduleItems = []

    document.body.addEventListener('contextmenu', event => {
      event.preventDefault()
      if (mainPage.className === 'main-page hide') {
        this.open(event.clientX, event.clientY)
      }
    })

    document.body.addEventListener('click', event => {
      if (event.target.offsetParent !== this.el) {
        this.close()
      }
      if (event.target.offsetParent === this.el) {
        this.close()
        const isSelectedItem = event.target.closest('.menu-item')
        const itemDataValue = isSelectedItem.dataset.type
        this.#currentSelectedItem = this.#moduleItems.find(
          (item) => item.type === itemDataValue
        )

        this.#currentSelectedItem.trigger()
      }
    })
  }

  open(coordinateX, coordinateY) {
    this.el.classList.add('open')

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const menuCoordinateX = windowWidth - coordinateX < this.el.offsetWidth
      ? windowWidth - this.el.offsetWidth - 5
      : coordinateX
    const menuCoordinateY = windowHeight - coordinateY < this.el.offsetHeight
      ? windowHeight - this.el.offsetHeight - 5
      : coordinateY

    this.el.style.left = menuCoordinateX + 'px'
    this.el.style.top = menuCoordinateY + 'px'
  }

  close() {
    this.el.classList.remove('open')
  }

  add(instanceOfModule) {
    this.#moduleItems.push(instanceOfModule)
    this.el.insertAdjacentHTML('beforeend', instanceOfModule.toHTML())
  }

}