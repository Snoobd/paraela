import audios from './data.js'
import { path } from './utils.js'
import elements from './playerElements.js'

export default { 
    audioData: audios,
    currentAudio : {},
    isPlaying: false,

    start() {
        elements.get.call(this)
        elements.actions.call(this)

        this.currentAudio = this.audioData[0]
        elements.createAudioElement.call(this, path(this.currentAudio.file))
        this.audio.src = path(this.currentAudio.file)
    },

    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = 'pause'
    },

    pause() {
        this.isPlaying = false;
        this.audio.pause()
        this.playPause.innerText = 'play_arrow'
    },
    togglePlayPause() {
        if(this.isPlaying) {
            this.pause()
        } else {
            this.play()
        }
    }
}
