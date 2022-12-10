import './styles.css'
import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
// import {TimerModule} from './modules/timer.module'
import {mainPage} from './constants'

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
  mainPage.classList.add('hide')
})

const menu = new ContextMenu('.menu')

const backgroundMode = new BackgroundModule('background', 'Случайный фон')
menu.add(backgroundMode)

const clicksCounter = new ClicksModule('click', 'Аналитика кликов')
menu.add(clicksCounter)

const randomShape = new ShapeModule('shape', 'Случайная фигура')
menu.add(randomShape)

// const newYearTimer = new TimerModule('newYear', 'Таймер до Нового года' )
// menu.add(newYearTimer)

