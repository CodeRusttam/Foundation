let btn = document.querySelector('.btn');
let overlay = document.querySelector('.overlay');
let x = document.getElementById("modal-close");

btn.addEventListener('click', function(){
    overlay.style.opacity = '1';
    overlay.style.zIndex = '1';
});

x.addEventListener('click', function(){
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-50';
})

function margin(){
let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
return random_margin[Math.floor(Math.random() * random_margin.length)];
}
function rotate(){
    let random_rotate = ['rotate(3deg)', 'rotate(1deg)','rotate(-1deg)','rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)']
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color(){
 let random_color = ['#c2ff3d', '##ff3de8','#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];
 return random_color[Math.floor(Math.random() * random_color.length)];
}


function NewBox(){
    let container = document.querySelector('.container2');
    let text = document.getElementById("note-text").value;
    let box1 = document.createElement('div');
    let h1 = document.createElement('h1');

    h1.innerHTML = text;
    container.insertAdjacentElement("beforeend", box1);
    box1.appendChild(h1);

            
    h1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
    h1.style.margin = margin();
    h1.style.transform = rotate();
    h1.style.background = color();

}
let input = document.querySelector('.box');

input.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
         NewBox();
    }
})