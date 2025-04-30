function fillCloset(id, num){
    for(let i = 1; i <= num; i++){
        let img = document.createElement("img");
        img.src = "../elements/clothes/" + id + "/" + i + ".png"
        // img.classList.add("clothes")

        document.getElementById("id").appendChild(img)
    }
}