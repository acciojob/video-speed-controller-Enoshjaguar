const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


let player__buttontoggle= document.getElementById('player__buttontoggle')
let video = document.getElementById('video')

player__buttontoggle.addEventListener('click',()=>{
	if(video.paused){
		
		video.play()
		player__buttontoggle.textContent = "⏸️"
		
	}
	else if(!video.paused){
		video.pause()
		player__buttontoggle.textContent = "▶️"
	}
	
	
	
})

	let progress__filled = document.getElementById('progress__filled')
	
video.addEventListener('timeupdate',()=>{
	let percentage = (video.currentTime/video.duration) * 100
	progress__filled.value= percentage
})
progress__filled.addEventListener("input", () => {

    let time = (progress__filled.value / 100) * video.duration;

    video.currentTime = time;

});

let volume = document.getElementById('volume')
video.volume = 0.75;
volume.addEventListener('input',()=>{
	
	video.volume = volume.value/100
})


let speed = document.getElementById('speed')
speed.addEventListener('change',()=>{
	video.playbackRate = speed.value
})

let rewind = document.getElementById('rewind')
let forward = document.getElementById('forward')

rewind.addEventListener('click', () => {
    video.currentTime -= 10
})

forward.addEventListener('click', () => {
    video.currentTime += 25
})