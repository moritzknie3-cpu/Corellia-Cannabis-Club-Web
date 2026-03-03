window.addEventListener('load',()=>{
document.querySelectorAll('.bar').forEach(bar=>{
bar.style.width=bar.getAttribute('data-progress');
});
});

function openLightbox(src){
document.getElementById('lightbox').style.display='flex';
document.getElementById('lightbox-img').src=src;
}

function closeLightbox(){
document.getElementById('lightbox').style.display='none';
}

let lang='de';
function toggleLang(){
lang=lang==='de'?'en':'de';
document.querySelectorAll('[data-de]').forEach(el=>{
el.innerText=el.getAttribute('data-'+lang);
});
}