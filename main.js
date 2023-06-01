let images = document.querySelectorAll(".photo")
let boxHover = document.querySelectorAll(".box-hover")
let hover1 = document.querySelector(".e1")
let image1 = document.querySelector(".i1")
let hover2 = document.querySelector(".e2")
let image2 = document.querySelector(".i2")
let hover3 = document.querySelector(".e3")
let image3 = document.querySelector(".i3")
let hover4 = document.querySelector(".e4")
let image4 = document.querySelector(".i4")
let hover5 = document.querySelector(".e5")
let image5 = document.querySelector(".i5")
let hover6 = document.querySelector(".e6")
let image6 = document.querySelector(".i6")
let boxIcons = document.querySelector(".box-icon")

let listIcon = document.querySelector(".list")
let menue = document.querySelector(".links")
let componentFirst = document.querySelector(".C-first")


listIcon.addEventListener("click", () => {
    menue.classList.toggle("items")
})

componentFirst.addEventListener("click", () => {
    menue.classList.toggle("items")
})


image1.addEventListener("mouseenter", () => {
    image1.style.opacity = "0.3"
    hover1.style.display = "flex"
})
image1.addEventListener("mouseleave", () => {
    image1.style.opacity = "1"
    hover1.style.display = "none"
})


image2.addEventListener("mouseenter", () => {
    image2.style.opacity = "0.3"
    hover2.style.display = "flex"
})
image2.addEventListener("mouseleave", () => {
    image2.style.opacity = "1"
    hover2.style.display = "none"
})


image3.addEventListener("mouseenter", () => {
    image3.style.opacity = "0.3"
    hover3.style.display = "flex"
})
image3.addEventListener("mouseleave", () => {
    image3.style.opacity = "1"
    hover3.style.display = "none"
})

image4.addEventListener("mouseenter", () => {
    image4.style.opacity = "0.3"
    hover4.style.display = "flex"
})
image4.addEventListener("mouseleave", () => {
    image4.style.opacity = "1"
    hover4.style.display = "none"
})

image5.addEventListener("mouseenter", () => {
    image5.style.opacity = "0.3"
    hover5.style.display = "flex"
})
image5.addEventListener("mouseleave", () => {
    image5.style.opacity = "1"
    hover5.style.display = "none"
})


image6.addEventListener("mouseenter", () => {
    image6.style.opacity = "0.3"
    hover6.style.display = "flex"
})
image6.addEventListener("mouseleave", () => {
    image6.style.opacity = "1"
    hover6.style.display = "none"
})

if (window.innerWidth < 501) {
    image1.addEventListener("mouseenter", () => {
        hover1.style.display = "none"
        image1.style.opacity = "1"
    })
    image2.addEventListener("mouseenter", () => {
        hover2.style.display = "none"
        image2.style.opacity = "1"
    })
    image3.addEventListener("mouseenter", () => {
        hover3.style.display = "none"
        image3.style.opacity = "1"
    })
    image4.addEventListener("mouseenter", () => {
        hover4.style.display = "none"
        image4.style.opacity = "1"
    })
    image5.addEventListener("mouseenter", () => {
        hover5.style.display = "none"
        image5.style.opacity = "1"
    })
    image6.addEventListener("mouseenter", () => {
        hover6.style.display = "none"
        image6.style.opacity = "1"
    })
}