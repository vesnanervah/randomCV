//burger and nav adaptive scripts
let burger = document.querySelector('.bourger');
let navList = document.querySelector('.nav-list');
let blindArea = document.querySelector('.blind-area');
let burgerLines = document.querySelectorAll('.bourger-line');

burger.onclick = function(e){
    navList.classList.toggle('nav-list-active');
    blindArea.classList.toggle('blind-area-active');
    document.querySelector('body').classList.toggle('hidden')
    for(let line of burgerLines){
        line.classList.toggle('white-bourger-line')
    }
}