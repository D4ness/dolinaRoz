const button = document.getElementById('back_top');
window.onscroll = () => {
    if (window.scrollY > 400){
        button.className = 'show_btn';
    } else {
        button.className = 'hide_btn';
    }
}

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const start_top = document.querySelector('.header');
button.addEventListener('click', () => {
    scrollTo(start_top);
})
