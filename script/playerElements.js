export default {

    get() {
        this.playPause = document.querySelector('#play-pause')
        this.btn = document.getElementById('btn')
    },

    createAudioElement(audio) {
        this.audio = new Audio(audio)
    },

    actions() {
        this.playPause.onclick = () => this.togglePlayPause()
        this.btn.onclick = () => this.play()
    }
}