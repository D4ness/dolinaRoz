function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
const nav_info = document.getElementById('nav_info');
const info = document.querySelector('#Информация');
nav_info.addEventListener('click', () => {
    scrollTo(info);
})

const nav_sorts = document.getElementById('nav_sorts');
const sorts = document.querySelector('#Сорта');
nav_sorts.addEventListener('click', () => {
    scrollTo(sorts);
})