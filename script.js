let video = document.getElementById("video");
let playPauseBtn = document.getElementById("player__buttontoggle");
let progressBar = document.getElementById("progress__filled");
let volume = document.getElementById("volume");
let playbackSpeed = document.getElementById("playbackSpeed");
let rewind = document.getElementById("rewind");
let forward = document.getElementById("forward");

// Default volume 75%
video.volume = 0.75;

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "❚ ❚";
  } else {
    video.pause();
    playPauseBtn.textContent = "►";
  }
});

// Progress bar update
video.addEventListener("timeupdate", () => {
  let percentage = (video.currentTime / video.duration) * 100;
  progressBar.value = percentage;
});

// Seek video
progressBar.addEventListener("input", () => {
  let time = (progressBar.value / 100) * video.duration;
  video.currentTime = time;
});

// Volume control
volume.addEventListener("input", () => {
  video.volume = volume.value / 100;
});

// Playback speed control
playbackSpeed.addEventListener("change", () => {
  video.playbackRate = Number(playbackSpeed.value);
});

// Rewind 10 seconds
rewind.addEventListener("click", () => {
  video.currentTime -= 10;
});

// Forward 25 seconds
forward.addEventListener("click", () => {
  video.currentTime += 25;
});