const colors = ["red","blue","green","yellow","purple"];

const button = document.getElementById("btn")

const colorText = document.getElementById("color")

button.addEventListener('click',()=>{
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]

    document.body.style.backgroundColor = randomColor

    colorText.textContent = randomColor

})
