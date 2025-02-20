document.addEventListener("mousemove", (e) => {
    const images = document.querySelectorAll(".floating-img");

    images.forEach((img, index) => {
        const moveX = (e.clientX - window.innerWidth / 2) * (0.01 * (index + 1));
        const moveY = (e.clientY - window.innerHeight / 2) * (0.01 * (index + 1));

        gsap.to(img, {
            x: moveX,
            y: moveY,
            opacity: 1,
            scale: 1,
            duration: 0.5
        });
    });
});

// GSAP Initial Animations
gsap.from(".hero-text h1", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2
});

gsap.from(".floating-img", {
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    stagger: 0.3
});

// Navbar Toggle Animation
const menuIcon = document.querySelector(".navigation-icon");
const menu = document.querySelector(".navigation__menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
    gsap.to(menu, { height: menu.classList.contains("open") ? "auto" : "0px", duration: 0.5 });
});

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    document.querySelectorAll(".floating-img").forEach((img, index) => {
        // Slight movement effect
        const moveX = (x / window.innerWidth - 0.5) * 30;
        const moveY = (y / window.innerHeight - 0.5) * 30;

        gsap.to(img, { 
            x: moveX, 
            y: moveY, 
            duration: 0.5, 
            ease: "power1.out" 
        });
    });
});

/* Hover Effect */
document.querySelectorAll(".floating-img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.1, duration: 0.3 });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1.0, duration: 0.3 });
    });
});

document.querySelectorAll(".floating-img").forEach(img => {
    img.addEventListener("mousemove", (event) => {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(img, { 
            x: x * 0.1, 
            y: y * 0.1, 
            duration: 0.3, 
            ease: "power1.out" 
        });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.5 });
    });
});

document.querySelectorAll(".floating-img").forEach(img => {
    img.addEventListener("mousemove", (event) => {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(img, { 
            x: x * 0.05,  /* Reduced movement for subtle effect */
            y: y * 0.05,  
            duration: 0.3, 
            ease: "power1.out" 
        });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.5 });
    });
});
