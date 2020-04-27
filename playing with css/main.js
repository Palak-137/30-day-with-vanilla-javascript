var input = document.querySelectorAll('.control input');

function handleupdate(){
     //console.log(this.value);
      const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
}

input.forEach(inputs=>inputs.addEventListener("mouseover",handleupdate));
//input.forEach(inputs=>inputs.addEventListener('mousemove',handleupdate));