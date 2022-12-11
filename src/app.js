import './styles.css'
import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
// import {TimerModule} from './modules/timer.module'
import {GameModule} from './modules/game.module'

const menu = new ContextMenu('.menu')
const backgroundMode = new BackgroundModule('one', 'change background')
menu.add(backgroundMode)

const click = new ClicksModule('two', 'count clicks')
menu.add(click)

const shape = new ShapeModule('three', 'random figure')
menu.add(shape)

const game = new GameModule('four', 'random bug')
menu.add(game)

const btn = document.querySelector('button')
btn.addEventListener('click', event => {
  const mainPage = document.querySelector('.main-page')
  mainPage.classList.add('hide')

  menu.open()
  menu.listenMenu()

// const timer = new TimerModule('four', 'time until the new year')
// menu.add(timer)

})