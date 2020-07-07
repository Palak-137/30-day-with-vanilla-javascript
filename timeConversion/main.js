/* using data-time will return node and to convert 
that into array either we use spread[...] or Array.from[]*/

const timenode =["6:54","3:23","4:54","3:45","2:31","3:43"];

const seconds = timenode.map(time=>{
   const [min , sec] =  time.split(":");
   console.log(min , sec);
   return min*60 + sec;
});
document.querySelector('.time').innerHTML = seconds.map(sec=>
    `<li>${sec}</li>`
).join('')