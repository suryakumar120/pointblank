/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign


------------------------------------------- */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
$(function () {
    
    "use strict";

    /***************************

    swup

    

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

    Envelopes
    
    ***************************/
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
                scrub: 2,
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

    globe.to(".team-picture-1", {  duration: 1 , opacity:0}, "-=1");
    globe.to(".team-picture-2", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-3", { bottom:"0" }, { top:"0", duration: 3 , opacity:1 }, );
    globe.fromTo(".team-picture-4", { bottom:"0" }, { top:"0", duration: 3 , opacity:1 }, "-=1");

    globe.to(".team-picture-3", {  duration: 1 , opacity:0}, "-=1");
    globe.to(".team-picture-4", {  duration: 1 , opacity:0 }, );
    globe.fromTo(".team-picture-5", { bottom:"0" }, { top:"0", duration: 3, opacity:1 });
    globe.fromTo(".team-picture-6", { bottom:"0" }, { top:"0", duration: 3 , opacity:1 }, "-=1");

    globe.to(".team-picture-5", {  duration: 1 , opacity:0}, "-=1");
    globe.to(".team-picture-6", {  duration: 1 , opacity:0 },);


    gsap.to(".video-container", {
        scale: 1.5, // Adjust the scale for the desired zoom effect
        scrollTrigger: {
            trigger: "#zoom-in-video",
            start: "top bottom", // Start the animation when the top of the video hits the bottom of the viewport
            end: "bottom top", // End the animation when the bottom of the video hits the top of the viewport
            scrub: true, // Smoothly animate the scale based on scroll position
            markers: false, // For debugging purposes, remove in production
        },
    });
    // $(document).ready(function () {
    //     $(".cta-btn").addClass("hidden");
    //     $("#cta-btn").addClass("hidden");
    // });
    
    $(".video-overlay-icon").click(function () {
        const video = $(".video-container video")[0];
        // video.setAttribute("controls", "controls");
        video.muted = !video.muted;
        
        $(".mute-icon").toggleClass("hidden");
        $(".unmute-icon").toggleClass("hidden");
    });

});
