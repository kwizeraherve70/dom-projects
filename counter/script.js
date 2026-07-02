const buttons = document.querySelectorAll(".btn")
const countElement = document.getElementById("count")
let count = 0

function updateCounter() {
    countElement.textContent = count

    if (count > 0){
        countElement.style.color = "green"
    }else if (count < 0) {
        countElement.style.color ="red"
    }else{
        countElement.style.color ="black"
    }
}

 buttons.forEach(button =>
    button.addEventListener('click',()=>{
        if(button.classList.contains("increase")){
            count++
        }else if(button.classList.contains("decrease")){
            count --
        }else{
            count = 0
        }
        updateCounter()
    })
 )