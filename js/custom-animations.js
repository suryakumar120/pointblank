/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign


------------------------------------------- */

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
                markers: true
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

});
