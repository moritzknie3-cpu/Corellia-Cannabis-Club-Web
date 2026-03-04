window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').style.display='none';
  },1000);

  document.querySelectorAll('.bar').forEach(bar=>{
    bar.style.width=bar.getAttribute('data-progress');
  });
});