// import { gsap } from "gsap";


let curShirt = 1;
let curPants = 1;
const maxClothes = 2;
function next(id){
    let cur = document.getElementById(id);
    if (id === 'shirt') {
        if (curShirt < maxClothes) {
            curShirt++;
        } else {
            curShirt = 1;
        }
        cur.src = "closet/" + id + "/" + curShirt + ".png"

    } else if (id === 'pants') {
        if (curPants < maxClothes){
            curPants++;
        } else {
            curPants = 1;
        }
        cur.src = "closet/" + id + "/" + curPants + ".png"
    }
}

function back(id){
    let cur = document.getElementById(id);
    if (id === 'shirt'){
        if(curShirt > 1){
            curShirt--;
        } else {
            curShirt = maxClothes;
        }
        cur.src = "closet/" + id + "/" + curShirt + ".png"

    } else if (id === 'pants'){
        if(curPants > 1){
            curPants--;
        } else {
            curPants = maxClothes;
        }
        cur.src = "closet/" + id + "/" + curPants + ".png"

    }
}






// gsap.set('.cursor',{xPercent:-50, yPercent: -50})
//
// let cursor = document.querySelector('.cursor')
// let arrow = document.querySelector('#arrow')
// let title = document.querySelector('h1')
//
// let mouseX;
// let mouseY;
//
// window.addEventListener('mousemove', e => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//
//     gsap.to(arrow, 0.5, {x: mouseX, y:mouseY})
// })
//
// window.addEventListener('mousemove', () => {
//     gsap.to(arrow, 1, {
//         x: mouseX,
//         y: mouseY
//     })
// })
