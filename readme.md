#OnEnterFrame

Another (`requestAnimationFrame`) Timer engine. Keeping things simple, with start/stop methods, and limits the render method to the desired frame rate.

### Usage

	import FPS from './fps'

	// create clock instance, and set frame rate (defaults to 60)
	let clock = new FPS(10) 
	
	// set an update function to trigger on each frame
	clock.trigger(() => {
	    console.log("frame @ 10fps")
	})
	
	// start | stop
	
	clock.start() // .stop()