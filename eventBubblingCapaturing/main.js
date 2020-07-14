const divs = document.querySelectorAll('div')

function textlog(e){
    console.log(this.classList.value)
}

divs.forEach(div=>div.addEventListener("click",textlog,{
    capture:true
}))