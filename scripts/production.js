function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
const nav_info = document.getElementById('nav_info');
console.log(nav_info);
const info = document.querySelector('#Информация');
console.log(info);
nav_info.addEventListener('click', () => {
    scrollTo(info);
})