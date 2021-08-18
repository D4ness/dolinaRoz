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

const nav_contact = document.getElementById('nav_contact');
const contacts = document.querySelector('#Контакты');
nav_contact.addEventListener('click', () => {
    scrollTo(contacts);
})
const nav_prices = document.getElementById('nav_prices');
const prices = document.querySelector('#Цены');
nav_prices.addEventListener('click', () => {
    scrollTo(prices);
})



let winWidth1 = window.innerWidth;
let bgVideo1 = 1920;
let bgBlock1 = document.getElementById('bg_block');
if (bgVideo1 >= winWidth1){
    bgBlock1.style.left = (-(bgVideo1-winWidth1)/2)+"px";
}
window.addEventListener(`resize`, event => {
    let winWidth = window.innerWidth;
    let bgVideo = 1920;
    let bgBlock = document.getElementById('bg_block');
    if (bgVideo >= winWidth){
        bgBlock.style.left = (-(bgVideo-winWidth)/2)+"px";
    }
    console.log(bgVideo);
}, false);
