import {Module} from '../core/module'

export class ClicksModule extends Module {
    #countOneClick
    #countDoubleClick
    #target
    #timer
    constructor(type, text) {
        super(type, text)
        this.#countOneClick = 0
        this.#countDoubleClick = 0        
        this.#target = false
        this.#timer = 3000
    }

    async #getCountClick() {
        // this.#target = true  
        // this.#countOneClick = 0
        // this.#countDoubleClick = 0
        
        // this.#calcOneClick()
        // this.#calcDblClick()

        const promise = new Promise(resolve => {         
            setTimeout(() => {                                   
                resolve({cntOneClick: this.#countOneClick, cntDblClick: this.#countDoubleClick})
                this.#target = false                
            }, this.#timer)
        })
        const result = await promise
                

        alert(`за ${this.#timer/1000} сек. количество одиночных кликов - ${result.cntOneClick}, двойных кликов - ${result.cntDblClick}`)
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        console.log('after countOneClick ', this.#countOneClick)
        console.log('after countDoubleClick ',this.#countDoubleClick)
    }

    #calcOneClick() {
        const evt = document.body;
        
        // const func = function() {
        //     if (this.#target) {
        //         this.#countOneClick++
        //     }
        //      console.log('count after 1 ',count)
        //     evt.removeEventListener("click", func.call())        
        // }
        
        // evt.addEventListener("click", func.call())
       
        evt.addEventListener("click", () => {
            if (this.#target) this.#countOneClick+=1 
        })

        evt.removeEventListener("click", () => {
            if (this.#target) this.#countOneClick+=1        
            
        })
        
    }

    #calcDblClick() {
        const evt = document.body;

        evt.addEventListener("dblclick", () => {
            if (this.#target) this.#countDoubleClick+=1
            if (this.#countOneClick>0) this.#countOneClick -= 2
            
        })
        
        evt.removeEventListener("dblclick", () => {
            if (this.#target) this.#countDoubleClick+=1
            if (this.#countOneClick>0) this.#countOneClick -= 2
            
        })
        //console.log('countDoubleClick ',this.#countDoubleClick)
        //console.log('event double',event)
    }

    trigger() {
        this.#target = true  
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        
        this.#calcOneClick()
        this.#calcDblClick()      
        this.#getCountClick()       
    }
}