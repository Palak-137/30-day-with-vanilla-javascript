import { link } from "fs";

const trigger = document.querySelectorAll('a');
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlighting(){
    const linkcoords = this.getBoundingClientRect();
  console.log(linkcoords)
  const  linkCood = {
      width: linkcoords.width ,
      height: linkcoords.height ,
      top : linkcoords.top + window.scrollY,
      left : linkcoords.left + window.scrollX
  }
  highlight.style.width = `${linkCood.width}px`;
  highlight.style.height = `${linkCood.height}px`;
  highlight.style.transform = `translate(${linkCood.left}px,${linkCood.top}px);`;
}


trigger.forEach(a=>a.addEventListener("mouseenter",highlighting))