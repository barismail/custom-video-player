const video = document.querySelector('#video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// status play and stop video
function toggleVideoStatus() {
    return video.paused ? video.play() : video.pause();
}

// update icon play and pause
function updatePlayIcon() {
    return video.paused ?
        play.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>' :
        play.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>';
}

// update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // get minutes
    let mins = Math.floor(video.currentTime / 60);
    console.log(mins, 'mins')
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

    return 0;
}

// set video progress
function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
    return 0;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);