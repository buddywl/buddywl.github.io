const displayDistance = 15 // distance in px to display another photo
const nDisplay = 7 // number of pictures to display at once

const images = document.getElementsByClassName("trail")
const vw = window.innerWidth;
const vh = window.innerHeight;

let globalIndex = 0 // used to count up the images
let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

function bubble(){
    let bubble = document.getElementById("bubble");
    bubble.style.display = "block";

}
function noBubble(){
    let bubble = document.getElementById("bubble");
    bubble.style.display = "none";
}
// function to activate photos
function activatePic(img, x, y){
    img.style.display = "block"
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.width = "5vh"
    img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
    // if the mouse is in the scissor/menu area, then turn visibility to hidden

    img.style.visibility = "visible";
    lastMousePosition = {x: x, y: y + document.body.scrollTop} // update the last mouse position
}

// compute mouse distance
function mouseDistance(x, y){
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
}

// onmousemove
window.onload = function() {
    setTimeout(function() {
        window.onmousemove = e => {
            if (mouseDistance(e.clientX, e.clientY) > displayDistance){
                let activePic = images[globalIndex % images.length]
                // let inactivePic = images[(globalIndex - nDisplay) % images.length]

                activatePic(activePic, e.clientX, e.clientY)
                // if (inactivePic){inactivePic.dataset.status = "inactive"}

                globalIndex++
            }
        }
    })
}