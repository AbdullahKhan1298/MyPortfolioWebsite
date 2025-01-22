// Toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll Sections
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header navbar a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*=' + id + ']').classList.add('active');
            });
            // Active Sections for Animation on Scroll
            sec.classList.add('show-animate');
        }
        // If Want to Use ANimation that repeats on Scroll use this
        else{
            sec.classList.remove('show-animate')
        }
    });
    //Sticky header
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle icon and Navbar when click navbar links (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
