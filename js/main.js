/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). email: miller.themes@gmail.com

------------------------------------------- */

import { Spinner } from '/js/plugins/spin.js'
$(function () {

    "use strict";

    /***************************

    swup

    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])',
        animationSelector: '[class="mil-main-transition"]'
    };
    const swup = new Swup(options);

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // if (typeof gsap !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
    //     // Register the plugin with GSAP
    //     gsap.registerPlugin(ScrollSmoother);

    //     // Initialize ScrollSmoother
    //     ScrollSmoother.create({
    //         wrapper: "#smooth-wrapper",
    //         content: "#smooth-content",
    //         smooth: 2,
    //         speed: 2,             // how smooth the scrolling is (default is 1)
    //         effects: true,           // looks for data-speed and data-lag attributes on elements
    //         smoothTouch: 0.1,        // how smooth scrolling is on touch devices (default is 0.1)
    //     });

    //     // Log to confirm initialization
    //     console.log("ScrollSmoother has been initialized");
    // } else {
    //     console.error("GSAP or ScrollSmoother is not loaded");
    // }


    /***************
     
    Scroll Smoother

     ***************/

    // ScrollSmoother.create({
    //     smooth: 2,
    //     speed: 2,
    //     effects: true,
    //     smoothTouch: 0.1,
    // })
    /***************************

    color variables

    ***************************/

    var accent = 'rgba(255, 152, 0, 1)';
    var dark = '#000';
    var light = '#fff';

    /***************************

    preloader
    
    ***************************/
    swup.on('contentReplaced', () => {
        // Load the script after page transition
        jQuery.getScript("/js/custom-animations.js");
    });
    // swup.on('contentReplaced', () => {
    //     // Load the script after page transition
    //     const script = document.createElement('script');
    //     script.type = 'module';
    //     script.src = '/js/custom-animations.js';
    //     document.head.appendChild(script);
    // });

    /*************
     
    Concept Intro


     ***************/
    // $(document).ready(function(){
    //     // if(!sessionStorage.getItem('newUser')){
    //     //     $('#smooth-content').hide();
    //     //     $('#mil-frame').hide();
    //     //     $('#mil-frame-duplicate').hide();
    //     //     $('#concept_intro_content').show();
    //     //     $('#cta-btn').hide();
    //     //     sessionStorage.setItem('newUser',false);
    //     // }
    //     // else{
    //     //     $('#concept_intro_content').hide();
    //     //     $('#smooth-content').show();

    //     // }
    //     $('#smooth-content').hide();
    //         $('#mil-frame').hide();
    //         $('#mil-frame-duplicate').hide();
    //         $('#concept_intro_content').show();
    //         $('#cta-btn').hide();

    // })
    // ScrollSmoother.create({
    //     wrapper:'concept_intro_wrapper',
    //     content:'concept_intro_content',
    //     smooth: 2,
    //     speed: 2,
    //     effects: true,
    //     smoothTouch: 0.1,
    // })

    /****************
     
    Intro Page

    **************/
    var intro_timeline = gsap.timeline();
    intro_timeline.fromTo(".intro_main", 1.5, { left: '100%' }, { left: '0', ease: "elastic.out(0.1, 1)" });


    // gsap.set(".intro_main",{opacity:'0'});

    // Need to uncomment
    // $(document).ready(function () {
    //     if (!sessionStorage.getItem('newUser')) {
    //         $('#intro_page').show();
    //         $('#intro_page').addClass("display");
    //         sessionStorage.setItem('newUser', 'false');
    //         // intro_timeline.play();
    //         console.log("new user");
    //     }
    //     else{
    //        console.log("old user")
    //     }
    // });
    // $("#intro_logo").on("click",function(){
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_close").on("click",function(){
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_meeting_btn").on("click",function(){
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect2").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect3").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect4").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect5").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })
    // $("#intro_service_redirect6").on("click",function(){
    //     // event.preventDefault();
    //     sessionStorage.setItem('newUser', 'false');
    //     $('#intro_page').hide();
    //     console.log("came to click")
    // })




    // // Initialize GSAP and set the initial state of the element
    // gsap.set(".intro_service_title-1", { rotationX: 0, opacity: 1 });

    // // Create the GSAP timeline and define the animation
    // var text_rotate_1 = gsap.timeline();
    // text_rotate_1.fromTo(".intro_service_title-1", { scale: 1, rotationX: 150 }, { scale: 1, opacity: 1, rotationX: 0, duration: 1 });
    // text_rotate_1.fromTo(".intro_service_description-1", { rotationX: 150 }, { scale: 1, rotationX: 0, duration: 1 }, "-=1");

    // // Select the element
    // let text_rotate_1_element = document.querySelector(".intro_service_title-1");

    // // Flag to track if the animation has played
    // let hasPlayed = false;

    // // Add event listeners for mouseenter and mouseleave
    // text_rotate_1_element.addEventListener("mouseenter", () => {
    //     console.log("hovering in");
    //     document.querySelector(".intro_service_description-1").classList.add("opacity-1");
    //     if (!hasPlayed) {
    //         text_rotate_1.restart(); // Restart the animation on hover in
    //         hasPlayed = true; // Set the flag to true after the animation plays
    //     }
    // });

    // // let hasPlayed = false;
    // text_rotate_1_element.addEventListener("mouseleave", () => {
    //     console.log("hovering out");
    //     if (hasPlayed || !text_rotate_1.isActive()) {
    //         document.querySelector(".intro_service_description-1").classList.remove("opacity-1");
    //     }
    //     if (hasPlayed && !text_rotate_1.isActive()) {
    //         text_rotate_1.restart(); // Reverse the animation on hover out
    //         hasPlayed = false; // Reset the flag to allow the animation to play again
    //     }
    // });

    // Initialize GSAP and set the initial state of all elements
    gsap.set(".intro_service_title", { rotationX: 0, opacity: 1 });
    // gsap.set(".intro_service_title-1",{rotationX: 0});
    // gsap.set(".intro_service_description", { rotationX: 0, opacity: 1 });

    // Function to create a timeline for each pair of title and description
    function createAnimationText(titleClass, descriptionClass) {
        var timeline = gsap.timeline();
        timeline.fromTo(titleClass, { scale: 1, rotationX: 150 }, { scale: 1, opacity: 1, rotationX: 0, duration: 1 });
        timeline.fromTo(descriptionClass, { rotationX: 150 }, { scale: 1, rotationX: 0, duration: 1 }, "-=1");
        return timeline;
    }

    // Get all title elements
    let titles = document.querySelectorAll(".intro_service_title");

    const hoverImage = document.getElementById("intro_img");

    // Function to update the image position
    function updateImagePosition(title) {
        const imageHeight = hoverImage.clientHeight;
        const containerHeight = document.querySelector(".intro_services").getBoundingClientRect().height;
        const containerTop = document.querySelector(".intro_services").getBoundingClientRect().top;
        const titleRect = title.getBoundingClientRect();
        const titleTop = titleRect.top;
        const titleHeight = titleRect.height;
        var titleMiddle = titleTop + titleHeight / 2;

        var imgTop = titleMiddle - imageHeight / 2 - containerTop;
        console.log("titleTop= ", titleTop, "titleHeight= ", titleHeight, " titleMiddle = ", titleMiddle, "imgTop", imgTop);

        // console.log(titleOffsetTop);
        if (imgTop < 0) {
            imgTop = 0;
        }
        if (imgTop + imageHeight + containerTop > containerHeight + containerTop) {
            imgTop = containerHeight - imageHeight;
            console.log("bottom happened");
        }
        hoverImage.style.transform = `translateY(${imgTop}px)`;
        const finalTop = document.querySelector(".intro_img").getBoundingClientRect().top;
        console.log("finaltop= ", finalTop);
    }

    // Loop through each title element and attach event listeners
    titles.forEach((title, index) => {
        let description = document.querySelector(`.intro_service_description-${index + 1}`);
        let timeline = createAnimationText(`.intro_service_title-${index + 1}`, `.intro_service_description-${index + 1}`);
        let hasPlayed = false;

        title.addEventListener("mouseenter", () => {
            console.log("hovering in");
            description.classList.add("opacity-1");

            const imgSrc = title.getAttribute("data-img-src");
            hoverImage.src = imgSrc;
            // Update the image position
            // gsap.fromTo(".intro_service_img",{scale:1},{scale:1.1});
            // setTimeout(() => {
            //     hoverImage.style.opacity = 1;
            // }, 0);
            updateImagePosition(title);
            if (!hasPlayed) {
                timeline.restart(); // Restart the animation on hover in
                hasPlayed = true; // Set the flag to true after the animation plays
            }
        });

        title.addEventListener("mouseleave", () => {
            console.log("hovering out");
            description.classList.remove("opacity-1");

            if (hasPlayed || !timeline.isActive()) {
            }
            if (hasPlayed && !timeline.isActive()) {
                timeline.restart(); // Reverse the animation on hover out
                hasPlayed = false; // Reset the flag to allow the animation to play again
            }
        });
    });
    const intro_service_titles = document.querySelector(".intro_service_titles");
    if (intro_service_titles) {
        intro_service_titles.addEventListener("mouseleave", () => {
            hoverImage.src = '';
        })
    }

    // text_rotate_1.play();

    // $(document).ready(function () {
    //     $(".mil-preloader").hide();
    // });




    var timeline = gsap.timeline();
    timeline.to(".mil-preloader-animation", {
        opacity: 1,
    });

    timeline.fromTo(
        ".mil-animation-1 .mil-h3", {
        y: "30px",
        opacity: 0
    }, {
        y: "0px",
        opacity: 1,
        stagger: 0.4
    },
    );

    timeline.to(".mil-animation-1 .mil-h3", {
        opacity: 0,
        y: '-30',
    }, "+=.3");

    timeline.fromTo(".mil-reveal-box", 0.1, {
        opacity: 0,
    }, {
        opacity: 1,
        x: '-30',
    });

    timeline.to(".mil-reveal-box", 0.45, {
        width: "100%",
        x: 0,
    }, "+=.1");
    timeline.to(".mil-reveal-box", {
        right: "0"
    });
    timeline.to(".mil-reveal-box", 0.3, {
        width: "0%"
    });
    timeline.fromTo(".mil-animation-2 .mil-h3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, "-=.5");
    timeline.to(".mil-animation-2 .mil-h3", 0.6, {
        opacity: 0,
        y: '-30'
    }, "+=.5");
    timeline.to(".mil-preloader", 0.8, {
        opacity: 0,
        ease: 'sine',
    }, "+=.2");
    timeline.fromTo(".mil-up", 0.8, {
        opacity: 0,
        y: 40,
        scale: .98,
        ease: 'sine',

    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
            $('.mil-preloader').addClass("mil-hidden");

        },
    }, "-=1");
    // timeline.fromTo(".intro_main",2, {left:'100%',opacity:'0'}, {left:'0',ease: "elastic.out(0.1, 5)",opacity:'1'},"+=.2");
    // timeline.fromTo(".intro_main",2, {left:'100%',opacity:'0'}, {left:'0',ease: "expo.out",opacity:'1'},"+=.2");
    // timeline.fromTo(".intro_main_sub",2, {right:'-100%',opacity:'0'}, {right:'0',ease: "expo.out",opacity:'1'},"-=2");
    // timeline.fromTo(".intro_service_title-1",{rotationX:180,transformPerspective: 1000},{rotationX: 0 ,transformPerspective: 1000 });

    /*****************

    Service Medico 
     
    ************/
    $(document).ready(function () {
        $('.show-more').click(function () {
            $('.show-more').hide();
            $('.hidden-div').show();

        })
    })

    /****************
    
    Adding font-jost to the menu-frame

    *****************/

    $(document).ready(function () {
        $('.mil-main-menu').addClass('font-jost')
    })

    /***************************

    anchor scroll

    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        var offset = 0;

        if ($(window).width() < 1200) {
            offset = 90;
        }

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 400);
    });
    // $(document).ready(function() {
    //     // Find the Facebook link
    //     var facebookLink = $('a[href="https://www.facebook.com/pointblankadv/"]');

    //     // Add a click event listener to the link
    //     facebookLink.on('click', function(event) {
    //         // Prevent the default behavior of the link
    //         // event.preventDefault();
    //         // Open the link in a new tab
    //         window.open($(this).attr('href'), '_blank');
    //     });
    // });
    /***************************

    append

    ***************************/
    $(document).ready(function () {
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
    });


    /****************** Homepage logo*******/
    $(document).ready(function () {
        // Attach click event handler to the logo
        $('logo-pointblank').click(function () {
            // Redirect to index.html
            window.location.href = 'index.html';
        });
    });

    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let symbol = element.querySelector(".mil-symbol");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });

    /*********************
    
   CTA Button

    *****************/

    // const cta = document.querySelector(".cta-btn");
    // if (cta) {
    //     gsap.set(cta, {
    //         x: 30,
    //         opacity: 0,
    //     });

    //     gsap.to(cta, {
    //         x: 0,
    //         opacity: 1,
    //         ease: 'sine',
    //         scrollTrigger: {
    //             trigger: "body",
    //             start: "top -40%",
    //             end: "top -40%",
    //             toggleActions: "play none reverse none"
    //         }
    //     })

    //     const cta_icon = document.querySelector(".cta-btn .cta-icon")
    //     let animation = gsap.to(cta_icon, {
    //         paused: true,
    //         opacity: 0,
    //     })

    //     let cta_btn_text = document.querySelector(".cta-btn .cta-btn-text")
    //     gsap.set(cta_btn_text, {
    //         x: 0,
    //         opacity: 0,
    //     });
    //     let cta_text_animation = gsap.to(cta_btn_text, {
    //         paused: true,
    //         x: 30,
    //         opacity: 1,
    //     })
    //     cta_icon.addEventListener("mouseenter", () => animation.play());
    //     cta_btn_text.addEventListener("mouseleave", () => animation.reverse());
    //     cta_icon.addEventListener("mouseenter", () => cta_text_animation.play());
    //     cta_btn_text.addEventListener("mouseleave", () => cta_text_animation.reverse());
    //     cta.addEventListener("mouseleave", () => cta_text_animation.reverse());
    //     cta.addEventListener("mouseleave", () => animation.reverse());

    // }

    /*********************
    
   CTA Button General (except homepage)

    *****************/
    const cta_gen = document.querySelector(".cta-btn-gen");
    if (cta_gen) {
        gsap.set(cta_gen, {
            x: 30,
            opacity: 0,
        });

        gsap.to(cta_gen, {
            x: 0,
            opacity: 1,
            ease: 'sine',
            scrollTrigger: {
                trigger: "body",
                start: "top -1%",
                end: "top -1%",
                toggleActions: "play none reverse none"
            }
        })

        const cta_icon_gen = document.querySelector(".cta-btn-gen .cta-icon-gen")
        let animation_gen = gsap.to(cta_icon_gen, {
            paused: true,
            opacity: 0,
        })

        let cta_btn_text_gen = document.querySelector(".cta-btn-gen .cta-btn-text-gen")
        gsap.set(cta_btn_text_gen, {
            x: 0,
            opacity: 0,
        });
        let cta_text_animation_gen = gsap.to(cta_btn_text_gen, {
            paused: true,
            x: 30,
            opacity: 1,
        })
        cta_icon_gen.addEventListener("mouseenter", () => animation_gen.play());
        cta_btn_text_gen.addEventListener("mouseleave", () => animation_gen.reverse());
        cta_icon_gen.addEventListener("mouseenter", () => cta_text_animation_gen.play());
        cta_btn_text_gen.addEventListener("mouseleave", () => cta_text_animation_gen.reverse());
        cta_gen.addEventListener("mouseleave", () => cta_text_animation_gen.reverse());
        cta_gen.addEventListener("mouseleave", () => animation_gen.reverse());
    }

    //    /*****************
    //         Logo  
    //    *****************/
    //         let mm = gsap.matchMedia();

    //         mm.add("(min-width: 1200px)", () => {
    //             const logo_white = document.querySelector('.logo-pointblank-lg-white');
    //             const logo_black = document.querySelector('.logo-pointblank-lg-black');

    //             // gsap.to(logo_white,{
    //             //     display:"none",
    //             //     scrollTrigger: {
    //             //         trigger: "body",
    //             //         start: "top -95%",
    //             //         end: "top -95%",
    //             //         toggleActions: "play none reverse none"
    //             //     }
    //             // })
    //             gsap.to(logo_black,{
    //                 display:"block",
    //                 paused:true,
    //                 scrollTrigger:{
    //                     trigger: ".about",
    //                     start: "top 5%",
    //                     end: "top 5%",
    //                     toggleActions: "play none reverse none",
    //                     // markers:"true",
    //                 }
    //             })
    //             gsap.set(logo_black,{

    //                 opacity:"1",
    //                 paused:true,
    //                 scrollTrigger:{
    //                     trigger: ".about",
    //                     start: "top 5%",
    //                     end: "top 5%",
    //                     toggleActions: "play none reverse none",
    //                     // markers:"true",
    //                 }
    //             })
    //             // gsap.to(logo_black,{
    //             //     opacity:"1",
    //             //     paused:true,
    //             //     scrollTrigger:{
    //             //         trigger: "body",
    //             //         start: "top -193%",
    //             //         end: "top -193%",
    //             //         toggleActions: "none none play play",
    //             //         markers:"true",
    //             //     }
    //             // })
    //             gsap.set(logo_black,{
    //                 opacity:"0",
    //                 paused:true,
    //                 scrollTrigger:{
    //                     trigger: ".services",
    //                     start: "top 5%",
    //                     end: "top 5%",
    //                     toggleActions: "play none reverse none",
    //                     // markers:"true",
    //                 }
    //             })
    //             gsap.to(logo_black,{

    //                 opacity:"1",
    //                 paused:true,
    //                 scrollTrigger:{
    //                     trigger: ".team",
    //                     start: "top 5%",
    //                     end: "top 5%",
    //                     toggleActions: "play none reverse none",
    //                     // markers:"true",
    //                 }
    //             })
    //         });
    /**************  
        Envelope Container title
    *********/

    const e_title = gsap.timeline({
        scrollTrigger: {
            trigger: ".envelope-container-title",
            start: "top 60%",
            end: "+=50%",
            scrub: 1,
            // pin:true,
            once: true,
            // markers:true,
        }
    })
    e_title.to(".envelope-rectangle", { duration: 1, borderColor: 'black', y: '0' })
    e_title.to(".e-word-1", { duration: 1, color: 'black', y: '0' });
    e_title.to(".e-word-2", { duration: 1, color: 'black', y: '0' });
    e_title.to(".e-word-3", { duration: 1, color: 'black', y: '0' });
    e_title.to(".e-word-4", { duration: 1, color: 'black', y: '0' });



    /**********
    
    Sliding nav bar

    **********/
    $(document).ready(function () {
        let lastScrollY = window.scrollY;
        const $mil_frame = $('#mil-frame');

        $(window).on('scroll', function () {
            let currentScrollY = window.scrollY;
            let scrollDiff = Math.abs(currentScrollY - lastScrollY);

            if (scrollDiff >= 10) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    $mil_frame.removeClass('nav_show').addClass('nav_hide');
                    //   console.log("scrolling down by " + scrollDiff);
                } else {
                    // Scrolling up
                    $mil_frame.removeClass('nav_hide').addClass('nav_show');
                    //   console.log("scroll up by " + scrollDiff);
                }
                lastScrollY = currentScrollY;
            }
        });
    });


    /************
    
    Contact form_submission

    ************/
    var opts = {
        lines: 13, // The number of lines to draw
        length: 38, // The length of each line
        width: 17, // The line thickness
        radius: 45, // The radius of the inner circle
        scale: 1, // Scales overall size of the spinner
        corners: 1, // Corner roundness (0..1)
        speed: 1, // Rounds per second
        rotate: 0, // The rotation offset
        animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000000', // CSS color or array of colors
        fadeColor: 'transparent', // CSS color or array of colors
        top: '50%', // Top position relative to parent
        left: '50%', // Left position relative to parent
        shadow: '0 0 1px transparent', // Box-shadow for the lines
        zIndex: 2000000000, // The z-index (defaults to 2e9)
        className: 'spinner', // The CSS class to assign to the spinner
        position: 'absolute', // Element positioning
    };

    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var formData = {
            name: $('input[name="contact_name"]').val(),
            email: $('input[name="contact_email"]').val(),
            mobile: $('input[name="contact_mobile"]').val(),
            query: $('textarea[name="contact_query"]').val(),
            // time : current
        }

        var target = document.getElementById('contact');
        var spinner = new Spinner(opts).spin(target);
        $('#contact_form').addClass('display-none');
        $.ajax({
            url: 'https://same-server-dev.azurewebsites.net/addContactData/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (response) {
                console.log("successfully saved the data", formData);
                $('#contact_form_onsubmit').removeClass('display-none');
                spinner.stop();
            },
            error: function (response) {
                console.log("failed saving contact data", formData);
                spinner.stop();
                $('#contact_form').removeClass('display-none');

                var errorMessage = $('#error-message');
                errorMessage.removeClass('display-none').addClass('show');

                setTimeout(function () {
                    errorMessage.removeClass('show');
                }, 3000);
            }
        });



    })

    /***********************
     
    Envelopes


     ********************/
    // const envelope1 = document.querySelector('.envelope1')
    const envelope_animation_lg = gsap.matchMedia();

    envelope_animation_lg.add('(min-width: 650px',()=>{
        const e1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".envelope-container-lg",
                    start: "top top",
                    end: "+=200%",
                    scrub: 0.5,
                    pin: true,
                    // markers:true,
                }
            }
        );
        // e1.to(".envelope1", {yPercent: -350, duration: 1});
        e1.to(".envelope1", { scale: 0.9, opacity: 0.9, duration: 1, ease: "power1.easeIn" });
        e1.fromTo(".envelope2", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.87, opacity: 0.3, duration: 1 });
        e1.to(".envelope2", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope3", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.2, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope4", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.15, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.2, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope4", { scale: 0.95, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope5", { y: "1000" }, { y: "0", duration: 1 }, "-=1")
    })
    const envelope_animation_sm = gsap.matchMedia();

    envelope_animation_sm.add('(max-width: 649px',()=>{
        const e1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".envelope-container-sm",
                    start: "top top",
                    end: "+=200%",
                    scrub: 0.5,
                    pin: true,
                    // markers:true,
                }
            }
        );
        // e1.to(".envelope1", {yPercent: -350, duration: 1});
        e1.to(".envelope1", { scale: 0.9, opacity: 0.9, duration: 1, ease: "power1.easeIn" });
        e1.fromTo(".envelope2", { x: "-1000" }, { x: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.87, opacity: 0.3, duration: 1 });
        e1.to(".envelope2", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope3", { x: "1000" }, { x: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.2, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope4", { x: "-1000" }, { x: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.15, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.2, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope4", { scale: 0.95, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope5", { x: "1000" }, { x: "0", duration: 1 }, "-=1");
    })


   


    /***********************
     * 
    Procress Cards 


     */
    const mm_process_cards = gsap.matchMedia();

    mm_process_cards.add('(min-width: 650px)', () => {
        const p1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".process-cards-container",
                    start: "top 10%",
                    end: "+=100%",
                    scrub: 1,
                    // pin:true,
                    // markers:true,
                }
            }
        )
        p1.to(".process-card-1", { scale: 1.3, duration: 1, y: "-120", x: "-300" }, "-=1");
        p1.to(".process-card-2", { scale: 1.3, duration: 1, y: "-120", x: "300" }, "-=1");
        p1.to(".process-card-3", { scale: 1.3, duration: 1, y: "120", x: "-300" }, "-=1");
        p1.to(".process-card-4", { scale: 1.3, duration: 1, y: "120", x: "300" }, "-=1");
        p1.fromTo(".process-title", { scale: 0.5 }, { scale: 1.0, duration: 1, opacity: "1" }, "-=1");
        gsap.to(".process-cards-container", {
            scrollTrigger: {
                trigger: ".process-cards-container",
                pin: true,
                start: "50% 50%", // Adjust start position if needed
                end: "+=100%",
                scrub: 1,
            }
        });
    })


    /**********
    Branding-casestudies
     **********/
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
        const branding = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".brand-casestudies",
                    start: "top 10%",
                    end: "+=300%",
                    scrub: 1,
                    pin: true,
                    // markers: true
                }
            }
        )
        branding.fromTo(".title-1", { y: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
        branding.fromTo(".image-1", { x: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
        branding.fromTo(".title-2", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
        branding.fromTo(".image-2", { xPercent: "0", scale: 0.7 }, { xPercent: "-100", duration: 1, scale: 1 }, "-=1");
        branding.fromTo(".title-3", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
        branding.fromTo(".image-3", { xPercent: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
        branding.to(".title-1", { yPercent: "-200", duration: 1 });
        branding.to(".image-1", { xPercent: "-200", duration: 1 }, "-=1");
        branding.to(".title-2", { yPercent: "-200", duration: 1 }, "-=1");
        branding.to(".image-2", { xPercent: "-200", duration: 1, scale: 0.7 }, "-=1");
        branding.to(".title-3", { yPercent: "-200", duration: 1 }, "-=1");
        branding.to(".image-3", { xPercent: "-200", duration: 1, scale: 1 }, "-=1");
    });

    // To be uncommented if something goes wrong
    // const branding = gsap.timeline(
    //     {
    //         scrollTrigger: {
    //             trigger: ".brand-casestudies",
    //             start: "top 10%",
    //             end: "+=300%",
    //             scrub: 1,
    //             pin: true,
    //             // markers: true
    //         }
    //     }
    // )
    // branding.fromTo(".title-1", { y: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
    // branding.fromTo(".image-1", { x: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
    // branding.fromTo(".title-2", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
    // branding.fromTo(".image-2", { xPercent: "0", scale: 0.7 }, { xPercent: "-100", duration: 1, scale: 1 }, "-=1");
    // branding.fromTo(".title-3", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
    // branding.fromTo(".image-3", { xPercent: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
    // branding.to(".title-1", { yPercent: "-200", duration: 1 });
    // branding.to(".image-1", { xPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".title-2", { yPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".image-2", { xPercent: "-200", duration: 1, scale: 0.7 }, "-=1");
    // branding.to(".title-3", { yPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".image-3", { xPercent: "-200", duration: 1, scale: 1 }, "-=1");

    //  const branding_img = gsap.timeline(
    //         {
    //             scrollTrigger:{
    //                 trigger:".brand-casestudies",
    //                 start:"top 10%",
    //                 end : "+=400%",
    //                 scrub:1,
    //                 // pin: true,
    //                 markers: true
    //             }
    //         }
    //     )
    // branding_img.to(".image-2",{xPercent:"-200",duration:1,scale:0.7},"-=1");
    // branding_img.to(".image-3",{xPercent:"-200",duration:1,scale:1},"-=1");





    /**********
     
     Team Globe

    **********/


    // const loader = new GLTFLoader();
    // loader.load(
    //     '/img/3d/nasa.glb', // Path to the GLTF file
    //     function (gltf) {
    //         // Initialize Three.js
    //         const scene = gltf.scene || new THREE.Group();
    //         const renderer = new THREE.WebGLRenderer({ alpha: true });
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         document.getElementById('model').appendChild(renderer.domElement);

    //         // const scene = new THREE.Scene();
    //         renderer.setPixelRatio(window.devicePixelRatio);
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         const camera = new THREE.PerspectiveCamera(
    //             45,
    //             window.innerWidth / window.innerHeight,
    //             1,
    //             10000
    //         );

    //         camera.position.set(0, 0, 100);
    //         const controls = new OrbitControls(camera, renderer.domElement);
    //         controls.update();
    //         renderer.render(scene, camera);

    //         /// lighting ///

    //         const light = new THREE.AmbientLight(0xffaaff);
    //         light.position.set(10, 10, 10);
    //         scene.add(light);

    //         /// geometry ///

    //         // const boxGeometry = new THREE.Mesh(
    //         //     new THREE.BoxGeometry(100, 100, 100),
    //         //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
    //         // );
    //         // scene.add(boxGeometry);

    //         console.log(scene);
    //         animate();

    //         function animate() {
    //             requestAnimationFrame(animate);
    //             // gltf.camera.y += 0.01;
    //             renderer.render(scene, camera);
    //         }
    //     },
    //     undefined,
    //     function (error) {
    //         console.error(error);
    //     }
    // );
    // const loader = new GLTFLoader();
    // loader.load(
    //     '/img/3d/geometrynodes_scifi_sphere.glb',
    //     function (gltf) {
    //         const scene = new THREE.Scene();
    //         const renderer = new THREE.WebGLRenderer({ alpha: true });
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         document.getElementById('model').appendChild(renderer.domElement);
    //         const camera = new THREE.PerspectiveCamera(
    //             45,
    //             window.innerWidth / window.innerHeight,
    //             1,
    //             10000
    //         );

    //         scene.add(gltf.scene);

    //         const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
    //         const objectCenter = new THREE.Vector3();
    //         boundingBox.getCenter(objectCenter);

    //         camera.position.set(objectCenter.x, objectCenter.y, objectCenter.z + 1500);
    //         gltf.scene.position.copy(objectCenter.negate());


    //         const controls = new OrbitControls(camera, renderer.domElement);
    //         controls.enabled = false;
    //         // controls.update();

    //         const light = new THREE.AmbientLight(0xffaaff);
    //         light.position.set(10, 10, 10);
    //         scene.add(light);

    //         renderer.render(scene, camera);

    //         function animate() {
    //             requestAnimationFrame(animate);
    //             // gltf.camera.y += 0.01;
    //             gltf.scene.rotation.y += 0.01;
    //             renderer.render(scene, camera);
    //         }
    //         animate();

    //         window.addEventListener('resize', function () {
    //             renderer.setSize(window.innerWidth, window.innerHeight);
    //             camera.aspect = window.innerWidth / window.innerHeight;
    //             camera.updateProjectionMatrix();
    //         });
    //     },
    //     undefined,
    //     function (error) {
    //         console.error(error);
    //     }
    // );
    // const loader = new GLTFLoader();
    // loader.load(
    //     '/img/3d/geometrynodes_scifi_sphere.glb',
    //     function (gltf) {
    //         const scene = new THREE.Scene();
    //         const renderer = new THREE.WebGLRenderer({ alpha: true });
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         document.getElementById('model').appendChild(renderer.domElement);
    //         const camera = new THREE.PerspectiveCamera(
    //             45,
    //             window.innerWidth / window.innerHeight,
    //             1,
    //             10000
    //         );

    //         scene.add(gltf.scene);

    //         const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
    //         const objectCenter = new THREE.Vector3();
    //         boundingBox.getCenter(objectCenter);

    //         camera.position.set(objectCenter.x, objectCenter.y, objectCenter.z + 3);
    //         gltf.scene.position.copy(objectCenter.negate());
    //         console.log("objectCenter = ", boundingBox);

    //         const controls = new OrbitControls(camera, renderer.domElement);
    //         controls.enabled = false;
    //         // controls.update();

    //         const light = new THREE.AmbientLight(0xffaaff);
    //         light.position.set(10, 10, 10);
    //         scene.add(light);

    //         renderer.render(scene, camera);

    //         function animate() {
    //             requestAnimationFrame(animate);
    //             // gltf.camera.y += 0.01;
    //             gltf.scene.rotation.y += 0.01;
    //             renderer.render(scene, camera);
    //         }
    //         animate();

    //         window.addEventListener('resize', function () {
    //             renderer.setSize(window.innerWidth, window.innerHeight);
    //             camera.aspect = window.innerWidth / window.innerHeight;
    //             camera.updateProjectionMatrix();
    //         });
    //     },
    //     undefined,
    //     function (error) {
    //         console.error(error);
    //     }
    // );

    const globe = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".globe",
                start: "top 10%",
                end: "+=300%",
                scrub: 1,
                pin: true,
                // markers: true
            }
        }
    )
    const picture_1 = document.querySelector(".team-picture-1");
    gsap.set(picture_1, {
        opacity: 0,
    })
    const picture_2 = document.querySelector(".team-picture-2");
    gsap.set(picture_2, {
        opacity: 0,
    })
    const picture_3 = document.querySelector(".team-picture-3");
    gsap.set(picture_3, {
        opacity: 0,
    })
    const picture_4 = document.querySelector(".team-picture-4");
    gsap.set(picture_4, {
        opacity: 0,
    })
    const picture_5 = document.querySelector(".team-picture-5");
    gsap.set(picture_5, {
        opacity: 0,
    })
    const picture_6 = document.querySelector(".team-picture-6");
    gsap.set(picture_6, {
        opacity: 0,
    })
    const picture_7 = document.querySelector(".team-picture-7");
    gsap.set(picture_7, {
        opacity: 0,
    })
    // globe.fromTo(".team-picture-1", { yPercent: "0" }, { y: "-500", duration: 1 }, "-=1");
    // globe.fromTo(".team-picture-2", { yPercent: "0" }, { y: "-1000", duration: 2 }, "-=1");
    globe.fromTo(".team-picture-1", { bottom: "0" }, { top: "0", duration: 3, opacity: 1 }, "-=1");
    globe.fromTo(".team-picture-2", { bottom: "0" }, { top: "0", duration: 3, opacity: 1 }, "-=1");

    // globe.to(".team-picture-1", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-2", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-3", { bottom: "0" }, { top: "25%", duration: 3, opacity: 1 },);
    globe.fromTo(".team-picture-4", { bottom: "0" }, { top: "25%", duration: 3, opacity: 1 }, "-=1");

    // globe.to(".team-picture-3", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-4", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-5", { bottom: "0" }, { top: "50%", duration: 2, opacity: 1 });
    globe.fromTo(".team-picture-6", { bottom: "0" }, { top: "50%", duration: 2, opacity: 1 }, "-=2");

    // globe.to(".team-picture-5", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-6", {  duration: 1 , opacity:0 },);
    // globe.fromTo(".team-picture-7", { bottom:"0" }, { top:"0", duration: 2 , opacity:1 });
    // branding.fromTo(".image-1", { x: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
    // branding.fromTo(".title-2", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
    // branding.fromTo(".image-2", { xPercent: "0", scale: 0.7 }, { xPercent: "-100", duration: 1, scale: 1 }, "-=1");
    // branding.fromTo(".title-3", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
    // branding.fromTo(".image-3", { xPercent: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
    // branding.to(".title-1", { yPercent: "-200", duration: 1 });
    // branding.to(".image-1", { xPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".title-2", { yPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".image-2", { xPercent: "-200", duration: 1, scale: 0.7 }, "-=1");
    // branding.to(".title-3", { yPercent: "-200", duration: 1 }, "-=1");
    // branding.to(".image-3", { xPercent: "-200", duration: 1, scale: 1 }, "-=1");
    /*********
        Team- Founders
     */
    // const founders = gsap.timeline(
    //     {
    //         scrollTrigger: {
    //             trigger: ".founders",
    //             start: "top 0%",
    //             end: "+=100%",
    //             scrub: 1,
    //             // pin: true,
    //             // markers: true
    //         }
    //     }
    // )
    // founders.fromTo(".title-first", { xPercent: "-100" }, { xPercent: "0", duration: 1 }, "-=1");


    /************
    
    Casestudy Gallery

    ************/

    $(document).ready(function () {
        $(".img-responsive").click(function () {
            var t = $(this).attr("src");
            $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
            $("#myModal").modal();
        });

        $("video").click(function () {
            var v = $("video > source");
            var t = v.attr("src");
            $(".modal-body").html("<video class='model-vid' controls><source src='" + t + "' type='video/mp4'></source></video>");
            $("#myModal").modal();
        });
    });//EOF Document.ready
    /***************************
 
    cursor
 
    ***************************/

    const cursor = document.querySelector('.mil-ball');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
        gsap.to($(cursor), .2, {
            width: 90,
            height: 90,
            opacity: 1,
            ease: 'sine',
        });
    });

    $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
        gsap.to($(cursor), .2, {
            width: 20,
            height: 20,
            opacity: .1,
            ease: 'sine',
        });
    });

    $('.mil-accent-cursor').mouseover(function () {
        gsap.to($(cursor), .2, {
            background: accent,
            ease: 'sine',
        });
        $(cursor).addClass('mil-accent');
    });

    $('.mil-accent-cursor').mouseleave(function () {
        gsap.to($(cursor), .2, {
            background: dark,
            ease: 'sine',
        });
        $(cursor).removeClass('mil-accent');
    });

    $('.mil-drag').mouseover(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-drag').mouseleave(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseover(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseleave(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseover(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseleave(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').mouseover(function () {
        gsap.to($(cursor), .2, {
            scale: 0,
            ease: 'sine',
        });
        gsap.to($('.mil-ball svg'), .2, {
            scale: 0,
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').mouseleave(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });

        gsap.to($('.mil-ball svg'), .2, {
            scale: 1,
        });
    });

    $('body').mousedown(function () {
        gsap.to($(cursor), .2, {
            scale: .1,
            ease: 'sine',
        });
    });
    $('body').mouseup(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });
    });
    /***************************

     menu

    ***************************/
    $('.mil-menu-btn').on("click", function () {
        $('.mil-menu-btn').toggleClass('mil-active');
        $('.mil-menu').toggleClass('mil-active');
        $('.mil-menu-frame').toggleClass('mil-active');
    });
    /***************************

    main menu

    ***************************/
    $('.mil-has-children a').on('click', function () {
        $('.mil-has-children ul').removeClass('mil-active');
        $('.mil-has-children a').removeClass('mil-active');
        $(this).toggleClass('mil-active');
        $(this).next().toggleClass('mil-active');
    });
    /***************************

    progressbar

    ***************************/
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".mil-up");
    if ($(window).width() > 650) {
        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }







    const scaleImage = document.querySelectorAll(".mil-scale");

    if ($(window).width() > 650) {
        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }


    const parallaxImage = document.querySelectorAll(".mil-parallax");


    if ($(window).width() > 960) {
        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = $(section).data("value");
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    /**********
     
    Mobile Optimations 

     **********/
    $(document).ready(function () {
        // Select all img elements and set loading="lazy"
        $('img').attr('loading', 'lazy');
    });

    /***************************

    fancybox

    ***************************/
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
        ],
        loop: false,
        protect: true
    });
    $.fancybox.defaults.hash = false;
    /***************************

    reviews slider

    ***************************/

    var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>', '<div class="mil-custom-dot mil-slide-8"></div>', '<div class="mil-custom-dot mil-slide-9"></div>', '<div class="mil-custom-dot mil-slide-10"></div>', '<div class="mil-custom-dot mil-slide-11"></div>', '<div class="mil-custom-dot mil-slide-12"></div>', '<div class="mil-custom-dot mil-slide-13"></div>']
    var numVisibleDots = 8; // Number of dots visible at a time
    var mySwiper = new Swiper('.mil-reviews-slider', {
        // If we need pagination
        pagination: {
            el: '.mil-revi-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            nextEl: '.mil-revi-next',
            prevEl: '.mil-revi-prev',
        },
        on: {
            slideChange: function () {
                var activeIndex = this.activeIndex;
                if (activeIndex % 4 === 0) {
                    var lastIndex = this.slides.length - 1;
                    var startIndex = Math.max(0, activeIndex - Math.floor(numVisibleDots / 2));
                    var endIndex = Math.min(lastIndex, startIndex + numVisibleDots - 1);

                    // Hide all bullets
                    this.pagination.bullets.forEach(function (bullet) {
                        bullet.style.display = 'none';
                    });

                    // Show visible bullets
                    for (var i = startIndex; i <= endIndex; i++) {
                        this.pagination.bullets[i].style.display = 'block';
                    }
                }

            }
        }
    })

    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 6,
            },
        },
    });
    var swiper2 = new Swiper('.mil-infinite-show-2', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 5,
            },
        },
    });
    var swiper3 = new Swiper('.mil-infinite-show-3', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        // loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
        },
    });

    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    1 item slider

    ***************************/
    var swiper = new Swiper('.mil-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.mil-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************

         menu

        ***************************/
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
        /***************************

        append

        ***************************/
        $(document).ready(function () {
            $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").remove();
            $(".mil-arrow").clone().appendTo(".mil-arrow-place");
            $(".mil-dodecahedron").clone().appendTo(".mil-animation");
            $(".mil-lines").clone().appendTo(".mil-lines-place");
            $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
        });

        /***********
         Intro Page
         */

        //  $(document).ready(function () {
        //     if (!sessionStorage.getItem('newUser')) {
        //         $('#intro_page').show();    
        //         $('#intro_page').addClass("display");
        //         sessionStorage.setItem('newUser', 'false');
        //         // intro_timeline.play();
        //         console.log("new user");
        //     }
        //     else{
        //        console.log("old user")
        //     }
        // });
        // $("#intro_logo").on("click",function(){
        //     $('#intro_page').hide();
        //     console.log("came to click")
        // })
        // $("#intro_close").on("click",function(event){
        //     event.preventDefault();
        //     $('#intro_page').hide();
        //     console.log("came to click")
        // })
        // $("#intro_meeting_btn").on("click",function(event){
        //     event.preventDefault();
        //     $('#intro_page').hide();
        //     console.log("came to click")
        // })
        $(document).ready(function () {
            // Check if the current page is contact.html
            if (window.location.pathname.endsWith('contact.html')) {
                $('#cta-btn').hide(); // Hide the CTA button
            }
            else {
                $('#cta-btn').show();
            }
            // Additional code for "lets talk" button
            // $("#lets-talk").on("click", function(event) {
            //     event.preventDefault();
            //     console.log("clicked lets talk");
            //     $('#cta-btn').hide();
            // });
        });
        /************
    
    Contact form_submission

    ************/
        var opts = {
            lines: 13, // The number of lines to draw
            length: 38, // The length of each line
            width: 17, // The line thickness
            radius: 45, // The radius of the inner circle
            scale: 1, // Scales overall size of the spinner
            corners: 1, // Corner roundness (0..1)
            speed: 1, // Rounds per second
            rotate: 0, // The rotation offset
            animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#000000', // CSS color or array of colors
            fadeColor: 'transparent', // CSS color or array of colors
            top: '50%', // Top position relative to parent
            left: '50%', // Left position relative to parent
            shadow: '0 0 1px transparent', // Box-shadow for the lines
            zIndex: 2000000000, // The z-index (defaults to 2e9)
            className: 'spinner', // The CSS class to assign to the spinner
            position: 'absolute', // Element positioning
        };

        $('#contact_form').on('submit', function (e) {
            e.preventDefault();
            var formData = {
                name: $('input[name="contact_name"]').val(),
                email: $('input[name="contact_email"]').val(),
                mobile: $('input[name="contact_mobile"]').val(),
                query: $('textarea[name="contact_query"]').val(),
                // time : current
            }

            var target = document.getElementById('contact');
            var spinner = new Spinner(opts).spin(target);
            $('#contact_form').addClass('display-none');
            $.ajax({
                url: 'https://same-server-dev.azurewebsites.net/addContactData/',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (response) {
                    console.log("successfully saved the data", formData);
                    $('#contact_form_onsubmit').removeClass('display-none');
                    spinner.stop();
                },
                error: function (response) {
                    console.log("failed saving contact data", formData);
                    spinner.stop();
                    $('#contact_form').removeClass('display-none');

                    var errorMessage = $('#error-message');
                    errorMessage.removeClass('display-none').addClass('show');

                    setTimeout(function () {
                        errorMessage.removeClass('show');
                    }, 3000);
                }
            });



        })
        /***************************

        accordion

        ***************************/

        let groups = gsap.utils.toArray(".mil-accordion-group");
        let menus = gsap.utils.toArray(".mil-accordion-menu");
        let menuToggles = groups.map(createAnimation);

        menus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".mil-accordion-menu");
            let box = element.querySelector(".mil-accordion-content");
            let symbol = element.querySelector(".mil-symbol");
            let minusElement = element.querySelector(".mil-minus");
            let plusElement = element.querySelector(".mil-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        /****************
        
        Adding font-jost to the menu-frame
    
        *****************/

        $(document).ready(function () {
            $('.mil-main-menu').addClass('font-jost')
        })

        /*****************

   Service Medico 
    
   ************/
        $(document).ready(function () {
            $('.show-more').click(function () {
                $('.show-more').hide();
                $('.hidden-div').show();

            })
        })
        /************
   
   Casestudy Gallery

   ************/

        $(document).ready(function () {
            $(".img-responsive").click(function () {
                var t = $(this).attr("src");
                $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
                $("#myModal").modal();
            });

            //   $("video").click(function(){
            //     var v = $("video > source");
            //     var t = v.attr("src");
            //     $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
            //     $("#myModal").modal();  
            //   });
        });//EOF Document.ready
        /***************************

        cursor

        ***************************/

        $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
            gsap.to($(cursor), .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: 'sine',
            });
        });

        $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
            gsap.to($(cursor), .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: 'sine',
            });
        });

        $('.mil-accent-cursor').mouseover(function () {
            gsap.to($(cursor), .2, {
                background: accent,
                ease: 'sine',
            });
            $(cursor).addClass('mil-accent');
        });

        $('.mil-accent-cursor').mouseleave(function () {
            gsap.to($(cursor), .2, {
                background: dark,
                ease: 'sine',
            });
            $(cursor).removeClass('mil-accent');
        });

        $('.mil-drag').mouseover(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-drag').mouseleave(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseover(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseleave(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseover(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseleave(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').mouseover(function () {
            gsap.to($(cursor), .2, {
                scale: 0,
                ease: 'sine',
            });
            gsap.to($('.mil-ball svg'), .2, {
                scale: 0,
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').mouseleave(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });

            gsap.to($('.mil-ball svg'), .2, {
                scale: 1,
            });
        });

        $('body').mousedown(function () {
            gsap.to($(cursor), .2, {
                scale: .1,
                ease: 'sine',
            });
        });
        $('body').mouseup(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });
        });
        /***************************

        main menu

        ***************************/
        $('.mil-has-children a').on('click', function () {
            $('.mil-has-children ul').removeClass('mil-active');
            $('.mil-has-children a').removeClass('mil-active');
            $(this).toggleClass('mil-active');
            $(this).next().toggleClass('mil-active');
        });
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".mil-up");
        if ($(window).width() > 650) {
            appearance.forEach((section) => {
                gsap.fromTo(section, {
                    opacity: 0,
                    y: 40,
                    scale: .98,
                    ease: 'sine',

                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: .4,
                    scrollTrigger: {
                        trigger: section,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }







        const scaleImage = document.querySelectorAll(".mil-scale");

        if ($(window).width() > 650) {
            scaleImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    scale: value1,

                }, {
                    scale: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const parallaxImage = document.querySelectorAll(".mil-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
        /***************************

        fancybox

        ***************************/
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
                "slideShow",
                "zoom",
                "fullScreen",
                "close"
            ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
        /***************************

        reviews slider

        ***************************/

        var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>', '<div class="mil-custom-dot mil-slide-8"></div>', '<div class="mil-custom-dot mil-slide-9"></div>', '<div class="mil-custom-dot mil-slide-10"></div>', '<div class="mil-custom-dot mil-slide-11"></div>', '<div class="mil-custom-dot mil-slide-12"></div>', '<div class="mil-custom-dot mil-slide-13"></div>']
        var numVisibleDots = 8; // Number of dots visible at a time
        var mySwiper = new Swiper('.mil-reviews-slider', {
            // If we need pagination
            pagination: {
                el: '.mil-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            speed: 800,
            effect: 'fade',
            parallax: true,
            navigation: {
                nextEl: '.mil-revi-next',
                prevEl: '.mil-revi-prev',
            },
            on: {
                slideChange: function () {
                    var activeIndex = this.activeIndex;
                    if (activeIndex % 4 === 0) {
                        var lastIndex = this.slides.length - 1;
                        var startIndex = Math.max(0, activeIndex - Math.floor(numVisibleDots / 2));
                        var endIndex = Math.min(lastIndex, startIndex + numVisibleDots - 1);

                        // Hide all bullets
                        this.pagination.bullets.forEach(function (bullet) {
                            bullet.style.display = 'none';
                        });

                        // Show visible bullets
                        for (var i = startIndex; i <= endIndex; i++) {
                            this.pagination.bullets[i].style.display = 'block';
                        }
                    }

                }
            }
        })

        /***************************

        infinite slider

        ***************************/
        var swiper = new Swiper('.mil-infinite-show', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 6000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });
        var swiper2 = new Swiper('.mil-infinite-show-2', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });
        var swiper3 = new Swiper('.mil-infinite-show-3', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                // delay: 2000,
                delay: 0,
                disableOnInteraction: false,
            },
            // loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });

        /***************************

        portfolio slider

        ***************************/
        var swiper = new Swiper('.mil-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            parallax: true,
            mousewheel: {
                enable: true
            },
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });

        const e_title = gsap.timeline({
            scrollTrigger: {
                trigger: ".envelope-container-title",
                start: "top 60%",
                end: "+=50%",
                scrub: 1,
                // pin:true,
                once: true,
                // markers:true,
            }
        })
        e_title.to(".envelope-rectangle", { duration: 1, borderColor: 'black', y: '0' })
        e_title.to(".e-word-1", { duration: 1, color: 'black', y: '0' });
        e_title.to(".e-word-2", { duration: 1, color: 'black', y: '0' });
        e_title.to(".e-word-3", { duration: 1, color: 'black', y: '0' });
        e_title.to(".e-word-4", { duration: 1, color: 'black', y: '0' });





        /***********************
         
        Envelopes
    
    
         ********************/
        const envelope1 = document.querySelector('.envelope1')
        const e1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".envelope-container",
                    start: "top top",
                    end: "+=200%",
                    scrub: 0.5,
                    pin: true,
                    // markers:true,
                }
            }
        );
        // e1.to(".envelope1", {yPercent: -350, duration: 1});
        e1.to(".envelope1", { scale: 0.9, opacity: 0.9, duration: 1, ease: "power1.easeIn" });
        e1.fromTo(".envelope2", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.87, opacity: 0.3, duration: 1 });
        e1.to(".envelope2", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope3", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.2, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope4", { y: "1000" }, { y: "0", duration: 1 }, "-=1");
        e1.to(".envelope1", { scale: 0.82, opacity: 0.15, duration: 1 });
        e1.to(".envelope2", { scale: 0.85, opacity: 0.2, duration: 1 }, "-=1");
        e1.to(".envelope3", { scale: 0.9, opacity: 0.3, duration: 1 }, "-=1");
        e1.to(".envelope4", { scale: 0.95, opacity: 0.9, duration: 1 }, "-=1");
        e1.fromTo(".envelope5", { y: "1000" }, { y: "0", duration: 1 }, "-=1")


        /***********************
         * 
        Progress Cards 
    
    
         */
        // const p1 = gsap.timeline(
        //     {
        //         scrollTrigger: {
        //             trigger: ".process-cards-container",
        //             start: "top 10%",
        //             end: "+=100%",
        //             scrub: 1,
        //             // pin:true,
        //             // markers:true,
        //         }
        //     }
        // )
        // p1.to(".process-card-1", { scale: 1.3, duration: 1, y: "-120", x: "-300" }, "-=1");
        // p1.to(".process-card-2", { scale: 1.3, duration: 1, y: "-120", x: "300" }, "-=1");
        // p1.to(".process-card-3", { scale: 1.3, duration: 1, y: "120", x: "-300" }, "-=1");
        // p1.to(".process-card-4", { scale: 1.3, duration: 1, y: "120", x: "300" }, "-=1");
        // p1.fromTo(".process-title", { scale: 0.5 }, { scale: 1.0, duration: 1, opacity: "1" }, "-=1");
        // gsap.to(".process-cards-container", {
        //     scrollTrigger: {
        //         trigger: ".process-cards-container",
        //         pin: true,
        //         start: "top top", // Adjust start position if needed
        //         end: "+=100%",
        //         scrub: 1,
        //     }
        // });
        const mm_process_cards = gsap.matchMedia();

        mm_process_cards.add('(min-width: 650px', () => {
            const p1 = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: ".process-cards-container",
                        start: "top 10%",
                        end: "+=100%",
                        scrub: 1,
                        // pin:true,
                        // markers:true,
                    }
                }
            )
            p1.to(".process-card-1", { scale: 1.3, duration: 1, y: "-120", x: "-300" }, "-=1");
            p1.to(".process-card-2", { scale: 1.3, duration: 1, y: "-120", x: "300" }, "-=1");
            p1.to(".process-card-3", { scale: 1.3, duration: 1, y: "120", x: "-300" }, "-=1");
            p1.to(".process-card-4", { scale: 1.3, duration: 1, y: "120", x: "300" }, "-=1");
            p1.fromTo(".process-title", { scale: 0.5 }, { scale: 1.0, duration: 1, opacity: "1" }, "-=1");
            gsap.to(".process-cards-container", {
                scrollTrigger: {
                    trigger: ".process-cards-container",
                    pin: true,
                    start: "50% 50%", // Adjust start position if needed
                    end: "+=100%",
                    scrub: 1,
                }
            });
        })

        /**********
        Branding-casestudies
         **********/
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1000px)", () => {
            const branding = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: ".brand-casestudies",
                        start: "top 10%",
                        end: "+=300%",
                        scrub: 1,
                        pin: true,
                        // markers: true
                    }
                }
            )
            branding.fromTo(".title-1", { y: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
            branding.fromTo(".image-1", { x: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
            branding.fromTo(".title-2", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
            branding.fromTo(".image-2", { xPercent: "0", scale: 0.7 }, { xPercent: "-100", duration: 1, scale: 1 }, "-=1");
            branding.fromTo(".title-3", { yPercent: "0" }, { yPercent: "-100", duration: 1 }, "-=1");
            branding.fromTo(".image-3", { xPercent: "0" }, { xPercent: "-100", duration: 1, scale: 0.7 }, "-=1");
            branding.to(".title-1", { yPercent: "-200", duration: 1 });
            branding.to(".image-1", { xPercent: "-200", duration: 1 }, "-=1");
            branding.to(".title-2", { yPercent: "-200", duration: 1 }, "-=1");
            branding.to(".image-2", { xPercent: "-200", duration: 1, scale: 0.7 }, "-=1");
            branding.to(".title-3", { yPercent: "-200", duration: 1 }, "-=1");
            branding.to(".image-3", { xPercent: "-200", duration: 1, scale: 1 }, "-=1");
        });
        /** 
        Sliding nav bar

        **********/
        $(document).ready(function () {
            let lastScrollY = window.scrollY;
            const $mil_frame = $('#mil-frame');

            $(window).on('scroll', function () {
                let currentScrollY = window.scrollY;
                let scrollDiff = Math.abs(currentScrollY - lastScrollY);

                if (scrollDiff >= 10) {
                    if (currentScrollY > lastScrollY) {
                        // Scrolling down
                        $mil_frame.removeClass('nav_show').addClass('nav_hide');
                        //   console.log("scrolling down by " + scrollDiff);
                    } else {
                        // Scrolling up
                        $mil_frame.removeClass('nav_hide').addClass('nav_show');
                        //   console.log("scroll up by " + scrollDiff);
                    }
                    lastScrollY = currentScrollY;
                }
            });
        });

        /****************
         
         Globe
    
         ********/
        // const loader = new GLTFLoader();
        // loader.load(
        //     '/img/3d/geometrynodes_scifi_sphere.glb',
        //     function (gltf) {
        //         const scene = new THREE.Scene();
        //         const renderer = new THREE.WebGLRenderer({ alpha: true });
        //         renderer.setSize(window.innerWidth, window.innerHeight);
        //         document.getElementById('model').appendChild(renderer.domElement);
        //         const camera = new THREE.PerspectiveCamera(
        //             45,
        //             window.innerWidth / window.innerHeight,
        //             1,
        //             10000
        //         );

        //         scene.add(gltf.scene);

        //         const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
        //         const objectCenter = new THREE.Vector3();
        //         boundingBox.getCenter(objectCenter);

        //         camera.position.set(objectCenter.x, objectCenter.y, objectCenter.z + 3);
        //         gltf.scene.position.copy(objectCenter.negate());


        //         const controls = new OrbitControls(camera, renderer.domElement);
        //         controls.enabled = false;
        //         // controls.update();

        //         const light = new THREE.AmbientLight(0xffaaff);
        //         light.position.set(10, 10, 10);
        //         scene.add(light);

        //         renderer.render(scene, camera);

        //         function animate() {
        //             requestAnimationFrame(animate);
        //             // gltf.camera.y += 0.01;
        //             gltf.scene.rotation.y += 0.01;
        //             renderer.render(scene, camera);
        //         }
        //         animate();

        //         window.addEventListener('resize', function () {
        //             renderer.setSize(window.innerWidth, window.innerHeight);
        //             camera.aspect = window.innerWidth / window.innerHeight;
        //             camera.updateProjectionMatrix();
        //         });
        //     },
        //     undefined,
        //     function (error) {
        //         console.error(error);
        //     }
        // );

        // const globe = gsap.timeline(
        //     {
        //         scrollTrigger: {
        //             trigger: ".globe",
        //             start: "top 10%",
        //             end: "+=300%",
        //             scrub: 1,
        //             pin: true,
        //             // markers: true
        //         }
        //     }
        // )
        // const picture_1 = document.querySelector(".team-picture-1");
        // gsap.set(picture_1, {
        //     opacity: 0,
        // })
        // const picture_2 = document.querySelector(".team-picture-2");
        // gsap.set(picture_2, {
        //     opacity: 0,
        // })
        // const picture_3 = document.querySelector(".team-picture-3");
        // gsap.set(picture_3, {
        //     opacity: 0,
        // })
        // const picture_4 = document.querySelector(".team-picture-4");
        // gsap.set(picture_4, {
        //     opacity: 0,
        // })
        // const picture_5 = document.querySelector(".team-picture-5");
        // gsap.set(picture_5, {
        //     opacity: 0,
        // })
        // const picture_6 = document.querySelector(".team-picture-6");
        // gsap.set(picture_6, {
        //     opacity: 0,
        // })
        // const picture_7 = document.querySelector(".team-picture-7");
        // gsap.set(picture_7, {
        //     opacity: 0,
        // })
        // globe.fromTo(".team-picture-1", { yPercent: "0" }, { y: "-500", duration: 1 }, "-=1");
        // globe.fromTo(".team-picture-2", { yPercent: "0" }, { y: "-1000", duration: 2 }, "-=1");
        // globe.fromTo(".team-picture-1", { bottom: "0" }, { top: "0", duration: 3, opacity: 1 }, "-=1");
        // globe.fromTo(".team-picture-2", { bottom: "0" }, { top: "0", duration: 3, opacity: 1 }, "-=1");

        // globe.to(".team-picture-1", {  duration: 1 , opacity:0}, "-=1");
        // globe.to(".team-picture-2", {  duration: 1 , opacity:0 }, );
        // globe.fromTo(".team-picture-3", { bottom: "0" }, { top: "25%", duration: 3, opacity: 1 },);
        // globe.fromTo(".team-picture-4", { bottom: "0" }, { top: "25%", duration: 3, opacity: 1 }, "-=1");

        // globe.to(".team-picture-3", {  duration: 1 , opacity:0}, "-=1");
        // globe.to(".team-picture-4", {  duration: 1 , opacity:0 }, );
        // globe.fromTo(".team-picture-5", { bottom: "0" }, { top: "50%", duration: 4, opacity: 1 });
        // globe.fromTo(".team-picture-6", { bottom: "0" }, { top: "50%", duration: 4, opacity: 1 }, "-=4");

        // globe.to(".team-picture-5", {  duration: 1 , opacity:0}, "-=1");
        // globe.to(".team-picture-6", {  duration: 1 , opacity:0 },);
        /***************************

        1 item slider

        ***************************/
        var swiper = new Swiper('.mil-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        2 item slider

        ***************************/
        var swiper = new Swiper('.mil-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

    });

});
