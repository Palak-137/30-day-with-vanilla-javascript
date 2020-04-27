const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    console.log(e.propertyName);
    //f(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  //  }
}
panel.forEach(panels=> panels.addEventListener('click',toggleOpen));
panel.forEach(panels=>panels.addEventListener('mouseover',toggleActive));
