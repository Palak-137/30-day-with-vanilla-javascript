const player = document.querySelector('.player');
const video = player.querySelector('.vedio-player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
// build the function>
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function updateButton(){
    const icon = this.paused? "Pause" :"Play";
     toggle.textContent = icon;
   }
function skipData(){
    console.log('skiping');
     video.currentTime += parseFloat(this.dataset.skip);
}
function handlerangeupdate(){
    console.log(this.value);
    video[this.name] = this.value;
}
function handleprogress(){
    const percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}


video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
skipButtons.forEach(button=> button.addEventListener('click',skipData))
ranges.forEach(slider=>slider.addEventListener('change',handlerangeupdate))
video.addEventListener('timeupdate',handleprogress)