function debounce( func , wait=20 , immediate =true){
    var TimeOut;
    return function(){
        var context = this, args = arguments;
        var later = function(){
                TimeOut = null;
            if(!immediate) func.apply(context , args);
        };
        var callNow = immediate && !TimeOut;
        clearTimeout(TimeOut);
        TimeOut = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    }
}

const slideImage = document.querySelectorAll(".slide-in");

function checkSlide(e){
    console.log(window.scrollY);
    slideImage.forEach((img)=>{
        const slideInAt = (window.scrollY + window.innerHeight)- img.height/2;
        console.log(slideInAt);
        const imgBottom = img.offsetTop + img.height;
        const imgHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom ; 
        if(imgHalfShown && isNotScrolledPast){
            img.classList.add('active');
        }else{
            img.classList.remove('active');
        }

    })
}
window.addEventListener('scroll',debounce(checkSlide));