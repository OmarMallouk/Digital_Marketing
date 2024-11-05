// Select only images with the .gallery-img class
const gallery = gsap.utils.toArray('.gallery-img')

gsap.set('.gallery-img', {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
})

// Set up the ScrollTrigger only for the gallery section
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.gallery',
        start: 'top 30%',
        end: 'bottom top',
        toggleActions: 'play none play reverse'
    },
    defaults: {
        ease: 'power4.inOut'
    }
})

// Define animations within the timeline for gallery items
tl
    .from('li', {
        y: -100,
        stagger: 0.1
    })
    .to('.gallery-img', {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 55%, 0% 100%)'
    }, '<')
    .to('.gallery-img', {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
    }, '-=.5')
    .to('.border', {
        scaleX: 1
    }, '-=.5')
    .to(['span', 'p'], {
        yPercent: 0,
        stagger: 0.1
    }, '-=.5')

// Apply mouseenter and mouseleave events to each gallery image
gallery.forEach(img => {
    let p = img.closest('a').querySelector('p')
    let originalText = p.innerText  

    img.addEventListener('mouseenter', () => {
        gsap.to(img, {
            clipPath: 'polygon(0 100%, 100% 74%, 100% 0, 0 26%)'
        })
        randomType(p, '01', 500, true)
    })
    img.addEventListener('mouseleave', () => {
        gsap.to(img, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        })
        p.innerText = originalText
    })
})
