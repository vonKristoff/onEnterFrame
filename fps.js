export default class {
    constructor(fps = 60) {
        this.fps = toFrameRate(fps)
        this.now = Date.now()
        this.prev = Date.now()
        this.deltaFrame = 0
        this.deltaSeconds = 0
        this.run = false
    }
    update() {
        this.now = Date.now()
        let deltaTime = this.now - this.prev
        this.deltaFrame += deltaTime
        this.deltaSeconds += deltaTime
        this.prev = this.now
        // running at desired frame rate
        if(this.deltaFrame >= this.fps) this.nextFrame()
        // count seconds
        if(this.deltaSeconds >= 1000) this.nextSecond()
    }
    nextSecond() {
        this.deltaSeconds = 0
    }
    nextFrame() {
        this.deltaFrame = 0
        this.render()
    }
    start() {        
        this.run = true
        this.reset()
        cycle.call(this)
    }
    stop() {
        this.run = false
    }
    reset() {
        this.now = Date.now()
        this.prev = Date.now()
        this.deltaFrame = 0
        this.deltaSeconds = 0
    }
    render() {
        this.callback()
    }
    trigger(cb) {
        this.callback = cb
    }
}

function toFrameRate(seconds) {
    return  1000 / seconds
}

function cycle() {
    this.update.call(this)
    requestAnimationFrame(() => {
        if(this.run) cycle.call(this)
    })
}