const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk=300;

function shadow(e){
    const { offsetHeight: height , offsetWidth : width} = hero;
    let {offsetX : x , offsetY: y } = e;
     if(this!==e.target){
         x = x + e.target.offsetLeft;
         y = y + e.target.offsetTop;
     }
      const walkX = Math.round((x/width*walk)-(walk/2));
      const walkY = Math.round((y/height*walk)-(walk/2));
      text.style.textShadow = `${walkX}px ${walkY}px 0 pink,
      ${walkX * -1}px ${walkY*-1}px 0 cyan`;

}

hero.addEventListener('mousemove',shadow)