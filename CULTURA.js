document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll("a"); 


    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active'); 
        navLinks.classList.toggle('active'); 
    });

    document.addEventListener("click", function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active'); 
            hamburger.classList.remove('active'); 
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active'); 
            hamburger.classList.remove('active'); 
        });
    });
});