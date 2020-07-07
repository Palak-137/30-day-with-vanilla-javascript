const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const snap = document.querySelector('.snap');
const strip = document.querySelector('.strip');

function getVideo(){
   navigator.mediaDevices.getUserMedia({ video:true , audio: false })
   .then(localMediaStream=>{
       console.log(localMediaStream);
     
        video.srcObject = localMediaStream;
        video.play();
   }).catch(err=>console.log(err))
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
   return  setInterval(()=>{
    ctx.drawImage(video,0,0,width,height);
       //take the pixals
       let pixals = ctx.getImageData(0,0,width,height);
       //mess with them
      // pixals = redEffect(pixals);
      pixals = rgbEffect(pixals);
       //put them back
       ctx.putImageData(pixals,0,0);
      
    },16);    
}
function takePhoto(){
    snap.currentTime = 0;
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data ;
    link.setAttribute('download','handsome');
    link.innerHTML = `<img src="${data}" style="width:200px;height:200px" alt="pretty women"/>`;
    strip.insertBefore(link,strip.firstChild);
}

function redEffect(pixals)
{
   for(let i=0;i<pixals.data.length;i+=4){
       pixals.data[i+0] = pixals.data[i+0]+100//red
       pixals.data[i+1] = pixals.data[i+1]-50//green
       pixals.data[i+2] = pixals.data[i+2]*0.5//blue
   }
   return pixals;
}
function rgbEffect(pixals)
{
   for(let i=0;i<pixals.data.length;i+=4){
       pixals.data[i-150] = pixals.data[i+0]//red
       pixals.data[i+100] = pixals.data[i+1]//green
       pixals.data[i-159] = pixals.data[i+2]//blue
   }
   return pixals;
}
function redEffect(pixals)
{
   for(let i=0;i<pixals.data.length;i+=4){
       pixals.data[i+0] = pixals.data[i+0]-100//red
       pixals.data[i+1] = pixals.data[i+1]-50//green
       pixals.data[i+2] = pixals.data[i+2]*0.5//blue
   }
   return pixals;
}
getVideo();
video.addEventListener('canplay',paintToCanvas);

