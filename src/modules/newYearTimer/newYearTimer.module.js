import { Module } from '../../core/module'
import TIMER_IMAGE from './images/timer-img.jpg'
import moment from 'moment'
import 'moment-precise-range-plugin'

export class newYearTimerModule extends Module {
  #container
  #newYearDate
  #timerText

  constructor(type, text) {
    super(type, text)
    this.#newYearDate = new Date(2023, 0, 1)
  }

  #getFormattedTodayDate(date) {
    return moment(date).format("MMM Do YY")
  }

  #getPreciseDateDifference(date1, date2) {
    const date1Format = moment(date1)
    const date2Format = moment(date2)
    return moment.preciseDiff(date1Format, date2Format)
  }

  #createImgBlock() {
    const titleContainer = document.createElement('div')
    titleContainer.className = 'title-container'
    const title = document.createElement('h1')
    title.className = 'main-title'
    title.textContent = 'New Year Timer'
    const img = document.createElement('img')
    img.className = 'newyear-image'
    img.src = TIMER_IMAGE
    const todayText = document.createElement('p')
    todayText.className = 'today-text'
    todayText.textContent = `Today is ${this.#getFormattedTodayDate(new Date(), this.#newYearDate)}`
    titleContainer.append(title, img, todayText)
    return titleContainer
  }

  #createTimerBlock() {
    const timerContainer = document.createElement('div')
    timerContainer.className = 'timer-container'
    const message = document.createElement('p')
    message.className = 'message'
    message.textContent = 'New Year will come in'
    this.#timerText = document.createElement('p')
    this.#timerText.className = 'timer-text'
    this.#timerText.textContent = this.#getPreciseDateDifference(new Date(), this.#newYearDate)
    timerContainer.append(message, this.#timerText)
    this.#enableDateUpdate()
    return timerContainer
  }

  #enableDateUpdate() {
    setInterval(() => {
      this.#timerText.textContent = this.#getPreciseDateDifference(new Date(), this.#newYearDate)
    }, 1000)
  }

  trigger() {
    this.#container = document.createElement('div')
    this.#container.className = 'container-ny'
    document.body.append(this.#container)
    this.#container.append(
      this.#createImgBlock(),
      this.#createTimerBlock()
    )
    setTimeout(() => this.#container.classList.add('hidden'), 5000)
  }
}

