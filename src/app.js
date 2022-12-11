import './styles.css'
import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import './modules/newYearTimer/style-ny.css'
import {newYearTimerModule} from './modules/newYearTimer/newYearTimer.module'

import {GameModule} from './modules/game.module'
import {mainPage} from './constants'
import {TeammatesModule} from './modules/teammates.module'

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
  mainPage.classList.add('hide')
})

const menu = new ContextMenu('.menu')

const backgroundMode = new BackgroundModule('background', 'Случайный фон')
menu.add(backgroundMode)

const game = new GameModule('game', 'Поймать жука')
menu.add(game)

const clicksCounter = new ClicksModule('click', 'Аналитика кликов')
menu.add(clicksCounter)

const randomShape = new ShapeModule('shape', 'Случайная фигура')
menu.add(randomShape)

const newYearTimer = new newYearTimerModule('newYear', 'Таймер до Нового года' )
menu.add(newYearTimer)

const teammates = new TeammatesModule('teammates', 'Участники команды')
menu.add(teammates)