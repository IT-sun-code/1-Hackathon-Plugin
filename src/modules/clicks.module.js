import {Module} from '../core/module'

export class ClicksModule extends Module {
    #countOneClick
    #countDoubleClick
    #timer
    super(type, text){
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        this.#timer = 3000
    }

    async #getCountClick() {
        const promise = new Promise(resolve => {
            countOneClick = this.#countOneClick
            countDblClick = this.#countDoubleClick
            setTimeout(() => resolve({countOneClick, countDblClick}), this.#timer)
        })
        const result = await promise
        alert(`за ${this.#timer/1000} сек. количество одиночных кликов - ${result.countOneClick}, двойных кликов - ${result.countDblClick}`)
        this.#countOneClick = 0
        this.#countDoubleClick = 0
    }

    trigger() {
        document.addEventListener("click", () => {
            this.#countOneClick++
        })
        document.addEventListener("dblclick", () => {
            this.#countDoubleClick++
            this.#countOneClick -= 2
        })
    }
}