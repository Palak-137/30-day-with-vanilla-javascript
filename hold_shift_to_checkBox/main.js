const checkedboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastchecked;
function handlecheck(e){
  //  console.log(this);
    let inBetween = false;
if(e.shiftKey && this.checked){
 checkedboxes.forEach(checkbox=>{
     console.log(checkbox);
     if(checkbox===this || checkbox===lastchecked){
         inBetween=!inBetween;
         console.log('check in inBetween');
     }
     if(inBetween){
         checkbox.checked = true;
     }

 })
}
lastchecked=this;
}
checkedboxes.forEach(checkbox=> checkbox.addEventListener('click',handlecheck));