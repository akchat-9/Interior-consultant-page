const navSlide = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav-items');
    const navLink = document.querySelectorAll('.nav-link')

    menuIcon.addEventListener('click', () => {
        // toggle
        nav.classList.toggle('nav-active')

        // animate
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index/7 + 0.3}s`
            }
        })
        // burger animation
        menuIcon.classList.toggle('toggle');
    })

}
navSlide();