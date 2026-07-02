const slides = document.querySelectorAll(".slide")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

let currentSlide = 0

function showSlides(){

    slides.forEach(slide=>{

        slide.classList.remove(
            "active",
            "left",
            "right",
            "hidden"
        )

        slide.classList.add("hidden")
    })

    const prev =
        (currentSlide - 1 + slides.length) %
        slides.length

    const next =
        (currentSlide + 1) %
        slides.length

    slides[currentSlide].classList.remove("hidden")
    slides[currentSlide].classList.add("active")

    slides[prev].classList.remove("hidden")
    slides[prev].classList.add("left")

    slides[next].classList.remove("hidden")
    slides[next].classList.add("right")
}

function nextSlide(){

    currentSlide++

    if(currentSlide >= slides.length){

        currentSlide = 0
    }

    showSlides()
}

function prevSlide(){

    currentSlide--

    if(currentSlide < 0){

        currentSlide = slides.length - 1
    }

    showSlides()
}

showSlides()

let interval = setInterval(nextSlide,3000)

function restartInterval(){

    clearInterval(interval)

    interval = setInterval(nextSlide,3000)
}

nextBtn.addEventListener("click",()=>{

    nextSlide()

    restartInterval()
})

prevBtn.addEventListener("click",()=>{

    prevSlide()

    restartInterval()
})