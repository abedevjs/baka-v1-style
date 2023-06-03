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

const text = [window, btnClose];

btnClose.addEventListener('click', close);