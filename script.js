// Loader
window.addEventListener('load',()=>{
setTimeout(()=>{
document.getElementById('loader').style.display='none';
},1500);

document.querySelectorAll('.bar').forEach(bar=>{
bar.style.width=bar.getAttribute('data-progress');
});
});

// Sound
function playIntro(){
document.getElementById('introSound').play();
}

// Lightbox
function openLightbox(src){
document.getElementById('lightbox').style.display='flex';
document.getElementById('lightbox-img').src=src;
}
function closeLightbox(){
document.getElementById('lightbox').style.display='none';
}