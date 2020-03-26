console.log('Working');

const navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;
const hamburger = document.querySelector('.hamburger');


window.addEventListener('scroll', () => {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
        //hamburger.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky')
        //hamburger.classList.remove('sticky')
    }
})


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    hamburger.classList.toggle('sticky');
    navbar.classList.toggle('navbar--active');
}); 