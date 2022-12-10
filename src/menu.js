import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  #currentSelectedItem
  #moduleItems

  constructor(el) {
    super(el)
    this.#moduleItems = []


    // обработчик србытий на локумент
    // вызвать this.open()
  }
//clientX clientY передать параметром в open
  open() {
    window.addEventListener('contextmenu', event => {
      event.preventDefault()

      this.el.classList.add('open')
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const menuCoordinateX = windowWidth - event.offsetX < this.el.offsetWidth
        ? windowWidth - this.el.offsetWidth - 5
        : event.offsetX
      const menuCoordinateY = windowHeight - event.offsetY < this.el.offsetHeight
        ? windowHeight - this.el.offsetHeight - 5
        : event.offsetY

      this.el.style.top = menuCoordinateY + 'px'
      this.el.style.left = menuCoordinateX + 'px'

    })
  }

  close() {
    this.el.classList.remove('open')
  }

  add (instanceOfModule) {
    this.#moduleItems.push(instanceOfModule)
    this.el.insertAdjacentHTML('beforeend', instanceOfModule.toHTML())
  }

  listenMenu() {
    this.el.addEventListener('click', event => {
      this.close()
      const { target } = event
      const isSelectedItem = target.closest('.menu-item')
      const itemDataValue = isSelectedItem.dataset.type
      this.#currentSelectedItem = this.#moduleItems.find(
        (item) => item.type === itemDataValue
      )
      this.#currentSelectedItem.trigger()
    })
  }
}