
const button = document.getElementById('explore-btn');

button.addEventListener("click", function() {
    alert("Uganda welcomes you to amazing adventures!");
});

// Reveal on scroll
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    reveals.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");
        }
    });
});

const images = document.querySelectorAll(".gallery-image");

const modal = document.getElementById("image-modal");

const modalImage = document.getElementById("modal-image");

const closeBtn = document.getElementById("close-btn");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        modal.style.display = "flex";

        modalImage.src = image.src;

    });

});

closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});

const text = "Discover the Pearl of Africa";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing-text").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }
});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });

});