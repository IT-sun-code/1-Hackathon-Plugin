import {Module} from '../core/module'

export class ClicksModule extends Module {
    #countOneClick
    #countDoubleClick
    #timer
    constructor(type, text) {
        super(type, text)
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        this.#timer = 3000
    }

    async #getCountClick() {
        
        const cancelCountOne = this.#calcOneClick()
        const cancelCountDbl = this.#calcDblClick()

        const promise = new Promise(resolve => {         
            setTimeout(() => {                                   
                resolve({cntOneClick: this.#countOneClick, cntDblClick: this.#countDoubleClick})         
            }, this.#timer)
        })
        const result = await promise

        alert(`за ${this.#timer/1000} сек. количество одиночных кликов - ${result.cntOneClick}, двойных кликов - ${result.cntDblClick}`)
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        cancelCountOne()
        cancelCountDbl()
    }

    #calcOneClick() {
        const evt = document.body;
        
        function count() {
            this.#countOneClick += 1 
        }
        const boundCount = count.bind(this)
       
        evt.addEventListener("click", boundCount)

        return () => evt.removeEventListener("click", boundCount)
        
    }

    #calcDblClick() {
        const evt = document.body;

        function count() {
            this.#countDoubleClick+=1
            if (this.#countOneClick>0) this.#countOneClick -= 2
        }
        const boundCount = count.bind(this)

        evt.addEventListener("dblclick", boundCount)
        
        return () => evt.removeEventListener("dblclick", boundCount)
    }

    trigger() {
        this.#countOneClick = 0
        this.#countDoubleClick = 0

        this.#getCountClick()       
    }
}