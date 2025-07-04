// Lightbox Image Zoom
const images = document.querySelectorAll('.zoom-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
