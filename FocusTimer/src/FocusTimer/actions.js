import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as audios from "./audios.js"
export function toggleRunning(){
    state.isRunning =document.documentElement.classList.toggle('running')
    timer.countDown()
    audios.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
    audios.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = !!document.documentElement.classList.remove('running')
}

export function toggleMusic(){
    state.isMute = !document.documentElement.classList.toggle('music-on')
    if(state.isMute){
        audios.bgAudio.pause()
        return
    }
    audios.bgAudio.play()
}