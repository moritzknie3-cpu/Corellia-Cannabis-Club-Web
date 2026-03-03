window.addEventListener('load', () => {
  document.querySelectorAll('.progress-fill').forEach(bar => {
    bar.style.width = bar.getAttribute('data-progress');
  });
});

function openLightbox(src){
  document.getElementById('lightbox').style.display='flex';
  document.getElementById('lightbox-img').src=src;
}

function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}