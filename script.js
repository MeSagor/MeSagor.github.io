$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //navbar menu color change when active and scroll upto a section
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .max-width ul li a");

    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 75) {
                current = section.getAttribute("id");
                console.log(current);
            }
        });

        navLi.forEach((a) => {
            a.classList.remove("active-color");
            if (a.classList.contains(current)) {
                a.classList.add("active-color");
            }
        });
    };


    // active nav menu highlight
    $('.about-btn').click(function () {
        $('.about-right .about-btn').removeClass("live");
        $(this).addClass("live");

        var idAdd = $(this).attr("id");
        var className = "." + idAdd;
        $('.column-right .same').removeClass("show");
        $(className).addClass("show");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Programmer", "Designer", "Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
