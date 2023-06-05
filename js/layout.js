const hamburger__btn = document.querySelector('#hamburger__btn');
const hamburger__top = document.querySelector('.hamburger-top');
const hamburger__bottom = document.querySelector('.hamburger-bottom');
const sidebar = document.querySelector('#sidebar');
const blanket = document.querySelector('#blanket');

const sidebarToggle = function() {
    hamburger__btn.classList.toggle('open');

    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');

    blanket.classList.toggle('flex');
    blanket.classList.toggle('hidden');

    hamburger__top.classList.toggle('bg-white');
    hamburger__bottom.classList.toggle('bg-white');

    hamburger__top.classList.toggle('bg-textColor');
    hamburger__bottom.classList.toggle('bg-textColor');
};

hamburger__btn.addEventListener('click', sidebarToggle);