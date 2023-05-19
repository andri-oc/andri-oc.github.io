// memunculkan navbar slide
const menuTogel = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul');

menuTogel.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// ketika hamburger di klik di luar menu

// document.addEventListener('click', function(e){
//     if (!menuTogel.contains(e.target) && !nav.contains(e.target)) {
//         nav.classList.remove('active');
//     }
// });

