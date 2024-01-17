/*let currentSlide = 0;
const sliders = document.querySelector('div.sliders');
sliders.style.width = 'calc(100vw * 3)';

}*/

/*--------------------------------------------------------------------------------*/

let currentSlide = 0;
const sliders = document.querySelector('.sliders');
const pointer = document.querySelectorAll('.pointer');
const totalPointer = pointer.length;
const slidersWidth = sliders.style.width = `calc(100vw * ${totalPointer})`;

/*function goNext() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalPointer -1;
    } 
    updateSlider();
}*/

function goNext() {
    currentSlide++;
    if (currentSlide > (totalPointer -1)) {
        currentSlide = 0;
    } 
    updateSlider();
}

function updateSlider() {
    const newMargin = (currentSlide * 900);
    document.querySelector('.sliders').style.marginLeft = `-${newMargin}px`;
    console.log(newMargin);
}

/*setInterval(goNext, 1500); Automatizar o SLIDE*/

const $menu = document.querySelector('.menu-opener');
const $menuList = document.querySelector('nav');

$menu.addEventListener('click', function(e){
    //reset a ação padrão do click
    e.preventDefault();
    
    //adiciona e retira classe da lista do menu
    $menuList.classList.toggle('menu-show');
  })

/*
function OpenMenu(){
document.querySelector('nav').style.display = 'block';
}*/

