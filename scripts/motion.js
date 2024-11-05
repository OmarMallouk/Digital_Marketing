
const gallery = gsap.utils.toArray('.gallery-img');

gsap.set('.gallery-img', {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.gallery',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none play reverse'
    },
    defaults: {
        ease: 'power4.inOut',
        delay: 0.4
    }
});

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
    }, '-=.5');

gallery.forEach(img => {
    let p = img.closest('a').querySelector('p');
    let originalText = p.innerText;

    img.addEventListener('mouseenter', () => {
        gsap.to(img, {
            clipPath: 'polygon(0 100%, 100% 74%, 100% 0, 0 26%)'
        });
        randomType(p, '01', 500, true);
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(img, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        });
        p.innerText = originalText;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.fade-text', 
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.fade-section',
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('.fade-image', 
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.fade-section',
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'play none none reverse'
            }
        }
    );
});