/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). email: miller.themes@gmail.com

------------------------------------------- */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
    
    
    $(document).ready(function () {
        $(".mil-preloader").hide();
    });
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

    const cta = document.querySelector(".cta-btn");
    if (cta) {
        gsap.set(cta, {
            x: 30,
            opacity: 0,
        });

        gsap.to(cta, {
            x: 0,
            opacity: 1,
            ease: 'sine',
            scrollTrigger: {
                trigger: "body",
                start: "top -40%",
                end: "top -40%",
                toggleActions: "play none reverse none"
            }
        })

        const cta_icon = document.querySelector(".cta-btn .cta-icon")
        let animation = gsap.to(cta_icon, {
            paused: true,
            opacity: 0,
        })

        let cta_btn_text = document.querySelector(".cta-btn .cta-btn-text")
        gsap.set(cta_btn_text, {
            x: 0,
            opacity: 0,
        });
        let cta_text_animation = gsap.to(cta_btn_text, {
            paused: true,
            x: 30,
            opacity: 1,
        })
        cta_icon.addEventListener("mouseenter", () => animation.play());
        cta_btn_text.addEventListener("mouseleave", () => animation.reverse());
        cta_icon.addEventListener("mouseenter", () => cta_text_animation.play());
        cta_btn_text.addEventListener("mouseleave", () => cta_text_animation.reverse());
        cta.addEventListener("mouseleave", () => cta_text_animation.reverse());
        cta.addEventListener("mouseleave", () => animation.reverse());

    }

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
    Procress Cards 


     */
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
            start: "top top", // Adjust start position if needed
            end: "+=100%",
            scrub: 1,
        }
    });

    /**********
    Branding-casestudies
     **********/
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
    const loader = new GLTFLoader();
    loader.load(
        '/img/3d/geometrynodes_scifi_sphere.glb',
        function (gltf) {
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('model').appendChild(renderer.domElement);
            const camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                1,
                10000
            );

            scene.add(gltf.scene);

            const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
            const objectCenter = new THREE.Vector3();
            boundingBox.getCenter(objectCenter);

            camera.position.set(objectCenter.x, objectCenter.y, objectCenter.z + 3);
            gltf.scene.position.copy(objectCenter.negate());
            console.log("objectCenter = ",boundingBox);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enabled = false;
            // controls.update();

            const light = new THREE.AmbientLight(0xffaaff);
            light.position.set(10, 10, 10);
            scene.add(light);

            renderer.render(scene, camera);

            function animate() {
                requestAnimationFrame(animate);
                // gltf.camera.y += 0.01;
                gltf.scene.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', function () {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            });
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

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
    gsap.set(picture_1,{
        opacity:0,
    })
    const picture_2 = document.querySelector(".team-picture-2");
    gsap.set(picture_2,{
        opacity:0,
    })
    const picture_3 = document.querySelector(".team-picture-3");
    gsap.set(picture_3,{
        opacity:0,
    })
    const picture_4 = document.querySelector(".team-picture-4");
    gsap.set(picture_4,{
        opacity:0,
    })
    const picture_5 = document.querySelector(".team-picture-5");
    gsap.set(picture_5,{
        opacity:0,
    })
    const picture_6 = document.querySelector(".team-picture-6");
    gsap.set(picture_6,{
        opacity:0,
    })
    const picture_7 = document.querySelector(".team-picture-7");
    gsap.set(picture_7,{
        opacity:0,
    })
    // globe.fromTo(".team-picture-1", { yPercent: "0" }, { y: "-500", duration: 1 }, "-=1");
    // globe.fromTo(".team-picture-2", { yPercent: "0" }, { y: "-1000", duration: 2 }, "-=1");
    globe.fromTo(".team-picture-1", { bottom:"0" }, { top:"0", duration:  3, opacity:1 }, "-=1");
    globe.fromTo(".team-picture-2", { bottom:"0" }, { top:"0", duration:  3, opacity:1 }, "-=1");

    // globe.to(".team-picture-1", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-2", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-3", { bottom:"0" }, { top:"25%", duration: 3 , opacity:1 }, );
    globe.fromTo(".team-picture-4", { bottom:"0" }, { top:"25%", duration: 3 , opacity:1 }, "-=1");

    // globe.to(".team-picture-3", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-4", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-5", { bottom:"0" }, { top:"50%", duration: 2, opacity:1 });
    globe.fromTo(".team-picture-6", { bottom:"0" }, { top:"50%", duration: 2 , opacity:1 }, "-=2");

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

    const scaleImage = document.querySelectorAll(".mil-scale");

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

        const scaleImage = document.querySelectorAll(".mil-scale");

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
        var swiper2 = new Swiper('.mil-infinite-show-2', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 2000,
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
                delay:0,
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
        scrollTrigger:{
            trigger:".envelope-container-title",
            start: "top 60%",
            end:"+=50%",
            scrub:1,
            // pin:true,
            once:true,
            // markers:true,
        }
    })
    e_title.to(".envelope-rectangle",{duration: 1,borderColor:'black',y:'0'})
    e_title.to(".e-word-1",{duration: 1,color:'black',y:'0'});
    e_title.to(".e-word-2",{duration: 1,color:'black',y:'0'});
    e_title.to(".e-word-3",{duration: 1,color:'black',y:'0'});
    e_title.to(".e-word-4",{duration: 1,color:'black',y:'0'});
   
    

    
    
    /***********************
     
    Envelopes


     ********************/
    const envelope1 = document.querySelector('.envelope1')
    const e1 = gsap.timeline(
        {
            scrollTrigger:{
                trigger:".envelope-container",
                start:"top top",
                end: "+=200%",
                scrub:0.5,
                pin:true,
                // markers:true,
            }
        }
    );
    // e1.to(".envelope1", {yPercent: -350, duration: 1});
    e1.to(".envelope1", { scale: 0.9, opacity: 0.9, duration: 1,ease: "power1.easeIn"});
    e1.fromTo(".envelope2",{y:"1000"},{y:"0",duration:1},"-=1");
    e1.to(".envelope1", { scale: 0.87, opacity: 0.3, duration: 1 });
    e1.to(".envelope2", { scale: 0.9, opacity: 0.9, duration: 1 },"-=1");
    e1.fromTo(".envelope3",{y:"1000"},{y:"0",duration:1},"-=1");
    e1.to(".envelope1", { scale: 0.82, opacity: 0.2, duration: 1 });
    e1.to(".envelope2", { scale: 0.85, opacity: 0.3, duration: 1 },"-=1");
    e1.to(".envelope3", { scale: 0.9, opacity: 0.9, duration: 1 },"-=1");
    e1.fromTo(".envelope4",{y:"1000"},{y:"0",duration:1},"-=1");
    e1.to(".envelope1", { scale: 0.82, opacity: 0.15, duration: 1 });
    e1.to(".envelope2", { scale: 0.85, opacity: 0.2, duration: 1 },"-=1");
    e1.to(".envelope3", { scale: 0.9, opacity: 0.3, duration: 1 },"-=1");
    e1.to(".envelope4", { scale: 0.95, opacity: 0.9, duration: 1 },"-=1");
    e1.fromTo(".envelope5",{y:"1000"},{y:"0",duration:1},"-=1")


    /***********************
     * 
    Progress Cards 


     */
    const p1 = gsap.timeline(
        {
            scrollTrigger:{
                trigger: ".process-cards-container",
                start:"top 10%",
                end: "+=100%",
                scrub: 1,
                // pin:true,
                // markers:true,
            }
        }
    )
    p1.to(".process-card-1",{scale: 1.3, duration: 1,y:"-120",x:"-300"},"-=1");
    p1.to(".process-card-2",{scale: 1.3, duration: 1,y:"-120",x:"300"},"-=1");
    p1.to(".process-card-3",{scale: 1.3, duration: 1,y:"120",x:"-300"},"-=1");
    p1.to(".process-card-4",{scale: 1.3, duration: 1,y:"120",x:"300"},"-=1");
    p1.fromTo(".process-title",{scale:0.5},{scale: 1.0, duration: 1,opacity: "1"},"-=1");
    gsap.to(".process-cards-container", {
        scrollTrigger: {
            trigger:".process-cards-container",
            pin: true,
            start: "top top", // Adjust start position if needed
            end: "+=100%",
            scrub: 1,
        }
    });

    /**********
    Branding-casestudies
     **********/
    const branding = gsap.timeline(
        {
            scrollTrigger:{
                trigger:".brand-casestudies",
                start:"top 10%",
                end : "+=300%",
                scrub:1,
                pin: true,
                // markers: true
            }
        }
    )
    branding.fromTo(".title-1",{y:"0"},{yPercent:"-100",duration:1},"-=1");
    branding.fromTo(".image-1",{x:"0"},{xPercent:"-100",duration:1,scale:0.7},"-=1");
    branding.fromTo(".title-2",{yPercent:"0"},{yPercent:"-100",duration:1},"-=1");
    branding.fromTo(".image-2",{xPercent:"0",scale:0.7},{xPercent:"-100",duration:1,scale:1},"-=1");
    branding.fromTo(".title-3",{yPercent:"0"},{yPercent:"-100",duration:1},"-=1");
    branding.fromTo(".image-3",{xPercent:"0"},{xPercent:"-100",duration:1,scale:0.7},"-=1");
    branding.to(".title-1",{yPercent:"-200",duration:1});
    branding.to(".image-1",{xPercent:"-200",duration:1},"-=1");
    branding.to(".title-2",{yPercent:"-200",duration:1},"-=1");
    branding.to(".image-2",{xPercent:"-200",duration:1,scale:0.7},"-=1");
    branding.to(".title-3",{yPercent:"-200",duration:1},"-=1");
    branding.to(".image-3",{xPercent:"-200",duration:1,scale:1},"-=1");

    /****************
     
     Globe

     ********/
    const loader = new GLTFLoader();
    loader.load(
        '/img/3d/nasa.glb',
        function (gltf) {
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('model').appendChild(renderer.domElement);
            const camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                1,
                10000
            );

            scene.add(gltf.scene);

            const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
            const objectCenter = new THREE.Vector3();
            boundingBox.getCenter(objectCenter);

            camera.position.set(objectCenter.x, objectCenter.y, objectCenter.z + 1500);
            gltf.scene.position.copy(objectCenter.negate());
            

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enabled = false;
            // controls.update();

            const light = new THREE.AmbientLight(0xffaaff);
            light.position.set(10, 10, 10);
            scene.add(light);

            renderer.render(scene, camera);

            function animate() {
                requestAnimationFrame(animate);
                // gltf.camera.y += 0.01;
                gltf.scene.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', function () {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            });
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

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
    gsap.set(picture_1,{
        opacity:0,
    })
    const picture_2 = document.querySelector(".team-picture-2");
    gsap.set(picture_2,{
        opacity:0,
    })
    const picture_3 = document.querySelector(".team-picture-3");
    gsap.set(picture_3,{
        opacity:0,
    })
    const picture_4 = document.querySelector(".team-picture-4");
    gsap.set(picture_4,{
        opacity:0,
    })
    const picture_5 = document.querySelector(".team-picture-5");
    gsap.set(picture_5,{
        opacity:0,
    })
    const picture_6 = document.querySelector(".team-picture-6");
    gsap.set(picture_6,{
        opacity:0,
    })
    const picture_7 = document.querySelector(".team-picture-7");
    gsap.set(picture_7,{
        opacity:0,
    })
    // globe.fromTo(".team-picture-1", { yPercent: "0" }, { y: "-500", duration: 1 }, "-=1");
    // globe.fromTo(".team-picture-2", { yPercent: "0" }, { y: "-1000", duration: 2 }, "-=1");
    globe.fromTo(".team-picture-1", { bottom:"0" }, { top:"0", duration:  3, opacity:1 }, "-=1");
    globe.fromTo(".team-picture-2", { bottom:"0" }, { top:"0", duration:  3, opacity:1 }, "-=1");

    // globe.to(".team-picture-1", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-2", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-3", { bottom:"0" }, { top:"25%", duration: 3 , opacity:1 }, );
    globe.fromTo(".team-picture-4", { bottom:"0" }, { top:"25%", duration: 3 , opacity:1 }, "-=1");

    // globe.to(".team-picture-3", {  duration: 1 , opacity:0}, "-=1");
    // globe.to(".team-picture-4", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-5", { bottom:"0" }, { top:"50%", duration: 4, opacity:1 });
    globe.fromTo(".team-picture-6", { bottom:"0" }, { top:"50%", duration: 4 , opacity:1 }, "-=4");

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
