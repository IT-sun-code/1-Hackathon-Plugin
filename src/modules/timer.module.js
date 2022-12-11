import {Module} from '../core/module'
import * as Dates from '../date'
import {DATE_OF_NEW_YEAR} from '../constants'


export class TimerModule extends Module {
  #date
  #taimerConteiner
  #taimerTextHTML
  constructor(type, text) {
    super(type, text)
    this.#date = DATE_OF_NEW_YEAR
    this.#taimerConteiner = document.createElement('div')
    this.#taimerTextHTML = document.createElement('h2')
  }

  #getTimerContent() {
    return Dates.leftUntilNewYear(new Date(2023, 0, 0), this.#date)
  }
 
  #enableDateUpdate() {
    setInterval(() => {
      this.#taimerTextHTML.textContent = this.#getTimerContent()
    }, 1000)
  }
 
  timeApp() {
    this.#taimerConteiner.id = 'timer'
    this.#taimerTextHTML.className = 'timer-text'
    this.#taimerTextHTML.textContent = this.#getTimerContent()

    const timeHtml = document.createElement('div')
    timeHtml.className = 'new-timer'
    const dateFormat = Dates.getToDayDate(new Date())
    timeHtml.textContent = `До нового года осталось: ${dateFormat}`

    this.#taimerConteiner.append(this.#taimerTextHTML, timeHtml)
    this.#enableDateUpdate()
    return this.#taimerConteiner
  }

  trigger() {
    this.timeApp()
  }
}