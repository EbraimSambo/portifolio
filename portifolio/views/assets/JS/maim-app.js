const btn = document.querySelector('.btn-navbar');
const navabar = document.querySelector('.navbar');
const fa = document.querySelector('#fas');

btn.addEventListener('click', ()=> {
    navabar.classList.toggle('active')
    fa.classList.toggle('fa-times')
})