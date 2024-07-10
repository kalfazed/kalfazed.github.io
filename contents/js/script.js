/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .portfolio-more, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== toggle icon navbar ====================*/
// let menuIconHobbies = document.querySelector('#menu-icon-hobbies');
// menuIconHobbies.onclick = () => {
//     menuIconHobbies.classList.toggle('bx-x');
//     document.querySelector('.navbar').classList.toggle('active'); // Uncomment if needed
// };

document.addEventListener('DOMContentLoaded', function() {
    let menuIconHobbies = document.querySelector('#menu-icon-hobbies');
    let navbar = document.querySelector('.navbar');

    if (menuIconHobbies) {
        menuIconHobbies.addEventListener('click', function() {
            menuIconHobbies.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
