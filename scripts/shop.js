function changeBgShop (){
        const bg =  document.getElementById('background');
        bg.style.backgroundImage = "url('images/bg_main_shop.png')";
}
function changeBgProd (){
        const bg =  document.getElementById('background');
        bg.style.backgroundImage = "url('images/bg_main_prod.jpg')";
}

function changeBgMain(){
        const bg =  document.getElementById('background');
        bg.style.backgroundImage = "url('images/bg_main_page.jpg')";
}

// ПРОКРУТКА
function scrollTo(element){
        window.scroll({
                left: 0,
                top: element.offsetTop,
                behavior: 'smooth'
        })
}
// Прокрутка для Магазина
const nav_bouq = document.getElementById('nav_bouq');
const bouquets = document.querySelector('#Букеты')
nav_bouq.addEventListener('click', () => {
        scrollTo(bouquets);
})
const nav_deli = document.getElementById('nav_deli');
const delivery = document.querySelector('#Доставка')
nav_deli.addEventListener('click', () => {
        scrollTo(delivery);
})
// const back_start = document.getElementById('back_top');
// const start = document.querySelector('.header')
// back_start.addEventListener('click', () => {
//         scrollTo(start);
// })
//

// Прокрутка для Производства
const nav_contact = document.getElementById('nav_contact');
const contact = document.getElementById('Контакты')
nav_contact.addEventListener('click', () => {
        scrollTo(contact);
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

// Инфо о букетах
function showBouquetInfo(bouquet){
        console.log(bouquet.innerHTML);

}

$(document).ready(function (){
        call(showBouquetInfo());
});