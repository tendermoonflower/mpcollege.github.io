var hmState = false
function toggleHM() {
    hmState = !hmState
    if(hmState){
        document.getElementById("hamburger").classList.add("is-active")
        document.getElementById("header").classList.add("move")

        // document.getElementById("offcanvasWithBothOptionsLabel").appendChild(document.getElementById("hamburger"))
    }else{
        document.getElementById("hamburger").classList.remove("is-active")
        document.getElementById("header").classList.remove("move")

        // document.getElementById("open-offcanvas").appendChild(document.getElementById("hamburger"))

    }
}