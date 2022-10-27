let arrow_back = document.querySelector('.left_arrow');
let arrow_next = document.querySelector('.right_arrow');
let sphere_1 = document.querySelector('.img1');
let sphere_2 = document.querySelector('.img2');
let sphere_3 = document.querySelector('.img3');
let text = document.querySelector('.main_text');
let planet_info = document.querySelector(".planet_info")

let img_arr = [
    {
        title: "Moon",
        img: '../assets/moon.png',
    },
    {
        title: "Earth",
        img: '../assets/earth.png',
    },
    {
        title: "Mars",
        img: '../assets/mars.png',
    },
]

arrow_next.onclick = function () {
    const img_ref = img_arr.splice(0, 1) // splice -> delete element and return
    img_arr = [...img_arr, ...img_ref]
    // img_arr.push(img_ref[0])
    render(img_arr)
}

arrow_back.onclick = function () {
    const img_ref = img_arr.splice(img_arr.length - 1, 1)
    img_arr = [...img_ref, ...img_arr]
    // img_arr.unshift(img_ref[0])
    render(img_arr)
}

let opened = false;

function expandToTop(el){
    planet_info.classList.add("visible")
    el.classList.add("expanded_planet")
}

function decreaseModal(el){
    planet_info.classList.remove("visible")
    el.classList.remove("expanded_planet")
    
}

function render(arr) {
    // sphere_2.removeEventListener("click", arr[0].onClick)
    sphere_1.src = arr[0].img
    sphere_2.src = arr[1].img
    sphere_2.setAttribute("data-planet", arr[1].title)
    sphere_3.src = arr[2].img
    text.innerHTML = arr[1].title
    // sphere_2.addEventListener("click", arr[1].onClick)
}

sphere_2.addEventListener("click", (ev)=>{
    const sphere = ev.target
    const planet = sphere.getAttribute("data-planet")
    if (!opened){
        expandToTop(sphere);
        opened = true;
    } else{
        decreaseModal(sphere);
        opened = false;
    }
    
})