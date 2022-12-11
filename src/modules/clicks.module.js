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
        
    }

    #calcOneClick(){
        if (this.#target) this.#countOneClick+=1
        console.log('countone ', this.#countOneClick)
    }

    #catchOneClick() {
        //const evt = document.body;
        
        document.addEventListener("click", this.#calcOneClick())

        //evt.removeEventListener("click", this.#calcOneClick())
       
        // evt.addEventListener("click", () => {
        //     if (this.#target) this.#countOneClick+=1
           
            
        // })
        // evt.removeEventListener("click", () => {
        //     if (this.#target) this.#countOneClick+=1        
            
        // })
        
    }

    #calcDblClick(){
        if (this.#target) this.#countDoubleClick+=1
        if (this.#countOneClick>0) this.#countOneClick -= 2
        console.log('countDouble ', this.#countDoubleClick)
    }

    #catchDblClick() {
        //const evt = document.body;

        document.addEventListener("dblclick", this.#calcDblClick())

        //evt.removeEventListener("dblclick", this.#calcDblClick())

        // evt.addEventListener("dblclick", () => {
        //     if (this.#target) this.#countDoubleClick+=1
        //     if (this.#countOneClick>0) this.#countOneClick -= 2
            
        // })
        // evt.removeEventListener("dblclick", () => {
        //     if (this.#target) this.#countDoubleClick+=1
        //     if (this.#countOneClick>0) this.#countOneClick -= 2
            
        // })
        //console.log('countDoubleClick ',this.#countDoubleClick)
        //console.log('event double',event)
    }

    trigger() {
        this.#target = true  
        this.#countOneClick = 0
        this.#countDoubleClick = 0
        
        this.#catchOneClick()
        this.#catchDblClick()      
        this.#getCountClick()       
    }
}