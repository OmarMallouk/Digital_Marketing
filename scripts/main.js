document.addEventListener("DOMContentLoaded", () => {
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('visible'); 
        }, index * 200); 
   
    });
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    gsap.from(".left-image", {
        scrollTrigger: {
            trigger: ".partner-section", 
            start: "top 80%", 
            toggleActions: "play none none reverse" 
        },
        x: -100, 
        opacity: 0, 
        duration: 1 
    });

    gsap.from(".right-image", {
        scrollTrigger: {
            trigger: ".partner-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 100, 
        opacity: 0, 
        duration: 1 
    });
});