let mask = document.querySelector('.mask');
window.addEventListener('load', () =>{
    mask.classList.add('hide_mask');
    setTimeout( () =>{
        mask.remove();
    }, 500)
})