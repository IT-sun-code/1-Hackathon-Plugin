import {Module} from '../core/module'

export class TeammatesModule extends Module {
    #teammates
    constructor(type, text) {
    super(type, text)
    this.#teammates = [
        'Анастасия_Курилко',
        'Татьяна_Ри',
        'Ксения_Решеткина',
        'Юлия_Есютина',
        'Сергей_Жапов'
    ]
  }

    #createTeamate() {
        const teammate = document.createElement('div')
        teammate.className = 'teamate'
        document.body.append(teammate)
        return teammate
    }

    #printTeamate(teammates) {
        if(teammates.length > 0) {
            const tm = this.#createTeamate()
            tm.innerHTML += teammates[0]
            setTimeout( () => {this.#printTeamate(teammates.slice(1))}, 1000)
        }
    }

    trigger() {
        this.#printTeamate(this.#teammates)
    }
}