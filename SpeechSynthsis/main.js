const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicedropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll('[type="range"],[name="text"]')
const speakBtn = document.querySelector('#speak');
const stopBtn = document.querySelector('#stop');
msg.text = document.querySelector("[name='text']").value;

function populatedVoice(){
    voices = this.getVoices();
    const voiceoption = voices
    .map(voice=>`<option value=${voice.name}>${voice.name} ((${voice.lang}))</option>`)
    .join('');
    voicedropdown.innerHTML = voiceoption
}
function setVoice(){
    console.log(this.value);
    msg.voice = voices.find(voice=> voice.name === this.value)
    toggle();
}
function toggle(startover = true){
    speechSynthesis.cancel();
    if(startover){
        speechSynthesis.speak(msg);
    }

}
function setoption(){
    console.log(this.name , this.value)
    console.log("sahi h")
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener("voiceschanged",populatedVoice)
voicedropdown.addEventListener("change",setVoice);
options.forEach(option=> option.addEventListener("change",setoption));
speakBtn.addEventListener('click',toggle)
stopBtn.addEventListener("click",function(){toggle(false)})