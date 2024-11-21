// JavaScript untuk menu dropdown pada perangkat mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');  // Toggle kelas 'active' untuk menampilkan atau menyembunyikan menu
});


// Js untuk gambar slider
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Inisialisasi slider dengan menampilkan gambar pertama
moveSlide(0);
