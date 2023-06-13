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

// btnTes.addEventListener('click', (e) => {
//     e.preventDefault();

//     blanketActive = true;

//     modal.classList.toggle('hidden');
//     modal.classList.toggle('block');

//     modalActive = true;
    
// });

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