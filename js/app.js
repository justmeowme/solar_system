let arrow1 = document.querySelector('.left_arrow');
let arrow2 = document.querySelector('.right_arrow');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let text = document.querySelector('.main_text');

let a = 0;

arrow1.onclick = function(){
    if (a == 0){
        img1.src = '../assets/mars.png'
        img2.src = '../assets/moon.png'
        img3.src = '../assets/earth.png'
        text.textContent = "Moon"
        a = 1;
    } else if (a==1){
        img2.src = '../assets/mars.png'
        img3.src = '../assets/moon.png'
        img1.src = '../assets/earth.png'
        text.textContent = "Mars"
        a = 2;
    } else{
        img3.src = '../assets/mars.png'
        img1.src = '../assets/moon.png'
        img2.src = '../assets/earth.png'
        text.textContent = "Earth"
        a = 0;
    }
}

arrow2.onclick = function(){
    if (a == 0){
        img1.src = '../assets/mars.png'
        img2.src = '../assets/moon.png'
        img3.src = '../assets/earth.png'
        text.textContent = "Moon"
        a = 2;
    } else if (a==1){
        img2.src = '../assets/mars.png'
        img3.src = '../assets/moon.png'
        img1.src = '../assets/earth.png'
        text.textContent = "Mars"
        a = 0;
    } else{
        img3.src = '../assets/mars.png'
        img1.src = '../assets/moon.png'
        img2.src = '../assets/earth.png'
        text.textContent = "Earth"
        a = 1;
    }
}


