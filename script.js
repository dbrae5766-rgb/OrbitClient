// ================================
// ORBIT CLIENT - JAVASCRIPT
// ================================


// Get navbar links
const navLinks = document.querySelectorAll(".nav-links a");


// Smooth scrolling
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        // Only handle links pointing to sections
        if (targetId.startsWith("#")) {
            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


// Active navigation link while scrolling
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// Download buttons
const downloadButtons = document.querySelectorAll(
    ".download-btn, .primary-btn"
);

downloadButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Orbit Client download coming soon!");
    });
});


// Learn More button
const learnMoreButton = document.querySelector(".secondary-btn");

if (learnMoreButton) {
    learnMoreButton.addEventListener("click", () => {
        document.querySelector("#features")?.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// Simple fade-in animation
const animatedElements = document.querySelectorAll(
    ".stat-card, .explore-card, .news-card"
);

animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(15px)";
    element.style.transition = "opacity 0.4s ease, transform 0.4s ease";
});


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});
