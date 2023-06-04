const blanket = document.querySelector('#blanket');
const modal = document.querySelector('#modalContainer');
const btnClose = document.querySelector('#modalCloseBtn');
const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    blanket.classList.remove('hidden');
    modal.classList.remove('hidden');
})

const close = function() {
    blanket.classList.add('hidden');
    modal.classList.add('hidden');
}

btnClose.addEventListener('click', close);

////////////////////////////////////////////////////////////////////////////

const authBtns__container = document.querySelector('.authBtns__container');
const auth__buttons = document.querySelectorAll('.auth__buttons');
const auth__contents = document.querySelectorAll('.auth__contents');

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
})