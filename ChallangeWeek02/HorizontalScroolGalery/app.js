
let carousel = document.querySelector(".carousel");
let img = document.querySelectorAll('img');
let imgcount = document.querySelectorAll("img").length;
let ww = window.innerWidth/2
carousel.style.width=`${ww*2.7}px`;

function Scroll(){
  for(i=0; i<imgcount; i++){
    var left = img[i].getBoundingClientRect().left/ww
    var right = (img[i].getBoundingClientRect().left-ww)/ww
    if(right > -(0.2) && right<0.8){
        img[i].style.transform = `scale(${1-right})`
    }
    else if(left<0.8 && left>0.15){
        img[i].style.transform = `scale(${left})`
    }
    else{
        img[i].style.transform = `scale(0.1)`
    }
  }

}
