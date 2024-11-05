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
    // Animate the left image
    gsap.from(".left-image", {
        scrollTrigger: {
            trigger: ".partner-section", // Trigger when the section comes into view
            start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport height
            toggleActions: "play none none reverse" // Play the animation on entering and reverse on leaving
        },
        x: -100, // Move from the left (out of view)
        opacity: 0, // Start invisible
        duration: 1 // Duration of the animation
    });

    // Animate the right image
    gsap.from(".right-image", {
        scrollTrigger: {
            trigger: ".partner-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 100, // Move from the right (out of view)
        opacity: 0, // Start invisible
        duration: 1 // Duration of the animation
    });
});