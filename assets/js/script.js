$(document).ready(function () {
    // Navbar toggle for mobile
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll events: navbar, scroll-top, scrollspy
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
});

// Change title and favicon on tab visibility
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Abdul Hannan";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Move Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favicon.png");
    }
});

// Typed.js effect
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "Full Stack Engineer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Experience modal
function setupExperienceModal() {
    document.querySelectorAll('.experience-item').forEach(function (item) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () {
            document.getElementById('experience-modal-content').textContent = this.getAttribute('data-details');
            document.getElementById('experience-modal').style.display = 'flex';
        });
    });
    document.getElementById('close-experience-modal').onclick = function () {
        document.getElementById('experience-modal').style.display = 'none';
    };
    document.getElementById('experience-modal').addEventListener('click', function (e) {
        if (e.target === this) this.style.display = 'none';
    });
}
document.addEventListener('DOMContentLoaded', setupExperienceModal);

// VanillaTilt for tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

// ScrollReveal animations
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.education .box', { interval: 200 });
srtop.reveal('.work .box', { interval: 200 });
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

// Disable developer shortcuts
document.onkeydown = function (e) {
    if (
        e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    ) {
        return false;
    }
};