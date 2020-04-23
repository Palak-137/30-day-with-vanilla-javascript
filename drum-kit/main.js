window.addEventListener("keydown",function(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`#box[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime =0;
    audio.play();
    key.classList.add('playing');
});
function removetransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing');
}
 const key = document.querySelectorAll('#box');
 key.forEach(key=>key.addEventListener('transitionend', removetransition));