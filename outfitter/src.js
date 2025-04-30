// import { gsap } from "gsap";


let curShirt = 1;
let curPants = 1;
let curHat = 1;
function next(id, maxClothes){
    let cur = document.getElementById(id);
    if (id === 'shirt') {
        if (curShirt < maxClothes) {
            curShirt++;
        } else {
            curShirt = 1;
        }
        cur.src = "../elements/clothes/" + id + "/" + curShirt + ".png"

    } else if (id === 'pants') {
        if (curPants < maxClothes){
            curPants++;
        } else {
            curPants = 1;
        }
        cur.src = "../elements/clothes/" + id + "/" + curPants + ".png"

    } else if (id === 'hat') {
        if (curHat < maxClothes){
            curHat++;
        } else {
            curHat = 1;
        }
        cur.src = "../elements/clothes/" + id + "/" + curHat + ".png"
    }
}

function back(id, maxClothes){
    let cur = document.getElementById(id);

    if (id === 'shirt'){
        if(curShirt > 1){
            curShirt--;
        } else {
            curShirt = maxClothes;
        }
        cur.src = "../elements/clothes/" + id + "/" + curShirt + ".png"
    } else if (id === 'pants'){
        if(curPants > 1){
            curPants--;
        } else {
            curPants = maxClothes;
        }
        cur.src = "../elements/clothes/" + id + "/" + curPants + ".png"
    } else if (id === 'hat') {
        if (curHat > 1) {
            curHat--;
        } else {
            curHat = maxClothes;
        }
        cur.src = "../elements/clothes/" + id + "/" + curHat + ".png"
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


// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}