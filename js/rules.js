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
})