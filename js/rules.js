const tabContainer = document.querySelector('.tab_container');
const tabButtons = document.querySelectorAll('.tab__buttons');
const tabContents = document.querySelectorAll('.tab__contents');
const paragrafContents = document.querySelectorAll('.paragraf__contents');


tabContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.tab__buttons');

    console.log(clicked);

    if (!clicked) return;//if there's noo clicked, then return immadiately

    //Remove active classes on Tab Buttons
    tabButtons.forEach(t => t.classList.remove('tab__buttons--active'));

    //Remove active classes on Tab Contents
    tabContents.forEach(c => c.classList.remove('tab__contents--active'));

    //Remove active classes on Paragraf Contents
    paragrafContents.forEach(c => c.classList.remove('paragraf__contents--active'));

    //Activate Tab Button
    clicked.classList.add('tab__buttons--active');

    //Activate Tab Content
    document.querySelector(`.tab__contents--${clicked.dataset.tab}`).classList.add('tab__contents--active');

    //Activate Paragraf Content
    document.querySelector(`.paragraf__contents--${clicked.dataset.tab}`).classList.add('paragraf__contents--active');
});

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

const blanket = document.querySelector('#blanket');
const modal = document.querySelector('#modalContainer');
const iconClose = document.querySelector('#modalCloseBtn');

const btnLogin = document.querySelector('#btnLogin');
const btnTes = document.querySelector('#btnTes');

const hamburger__btn = document.querySelector('#hamburger__btn');
const hamburger__top = document.querySelector('.hamburger-top');
const hamburger__bottom = document.querySelector('.hamburger-bottom');
const sidebar = document.querySelector('#sidebar');

const authBtns__container = document.querySelector('.authBtns__container');
const auth__buttons = document.querySelectorAll('.auth__buttons');
const auth__contents = document.querySelectorAll('.auth__contents');

let blanketActive = false;
let modalActive = false;

const close = function() {
    

    modal.classList.toggle('block');
    modal.classList.toggle('hidden');
    
    if(!blanketActive) {
        blanket.classList.toggle('flex');
        blanket.classList.toggle('hidden');
    }
    
    modalActive = false;
};

iconClose.addEventListener('click', close);

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('btnLogin');
    blanket.classList.toggle('hidden');
    blanket.classList.toggle('flex');
    modal.classList.toggle('hidden');
    modal.classList.toggle('block');
});


const sidebarToggle = function() {
    if(modalActive) {
        return;
    }

    hamburger__btn.classList.toggle('open');

    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');

    blanket.classList.toggle('flex');
    blanket.classList.toggle('hidden');

    hamburger__top.classList.toggle('bg-textColor');
    hamburger__bottom.classList.toggle('bg-textColor');

    modalActive = false;
    blanketActive = false;
    
    console.log('sidebarToggle fn executed');
};

hamburger__btn.addEventListener('click', sidebarToggle);

btnTes.addEventListener('click', (e) => {
    e.preventDefault();

    blanketActive = true;

    modal.classList.toggle('hidden');
    modal.classList.toggle('block');

    modalActive = true;
    
});

authBtns__container.addEventListener('click', (e) => {

    const clicked = e.target.closest('.auth__buttons');

    if (!clicked) return;

    //Remove active class on Button
    auth__buttons.forEach(btn => btn.classList.remove('auth__buttons--active'));

    //Remove active class on Content
    auth__contents.forEach(btn => btn.classList.remove('auth__contents--active'));

    //Add active class on Button
    clicked.classList.add('auth__buttons--active');

    //Activate Auth Content
    document.querySelector(`.auth__contents--${clicked.dataset.tab}`).classList.add('auth__contents--active');
});

////////////////////////////////////////////////////////////////////////////





