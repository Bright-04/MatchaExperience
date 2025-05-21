// Get the header elements
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo h1");

// Create a glow effect for the active nav element
function createNavGlowEffect() {
    if (window.innerWidth > 768) { // Only on desktop
        const activeLink = document.querySelector(".nav-link.active");
        if (activeLink) {
            const glowElement = document.createElement("span");
            glowElement.classList.add("nav-glow");
            document.body.appendChild(glowElement);
              function updateGlowPosition() {
                const activeLinkRect = activeLink.getBoundingClientRect();
                glowElement.style.width = `${activeLinkRect.width + 10}px`; // Reduced width
                glowElement.style.height = `${activeLinkRect.height + 5}px`; // Reduced height
                glowElement.style.left = `${activeLinkRect.left - 5}px`; // Reduced left offset
                glowElement.style.top = `${activeLinkRect.top - 2}px`; // Reduced top offset
            }
            
            updateGlowPosition();
            
            // Update position on scroll
            window.addEventListener("scroll", updateGlowPosition);
            
            // Cleanup function
            return () => {
                window.removeEventListener("scroll", updateGlowPosition);
                if (glowElement.parentNode) {
                    glowElement.parentNode.removeChild(glowElement);
                }
            };
        }
    }
    return null;
}

// Logo animation on hover
if (logo) {
    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "translateY(-3px) scale(1.02)";
    });
    
    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "";
    });
}

// Function to handle the header scroll effect
function handleScroll() {
	if (window.scrollY > 100) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
}

// Add subtle pulse animation to active link
function addPulseAnimationToActiveLink() {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
        const indicator = activeLink.querySelector(".pulse-indicator");
        
        if (!indicator) {
            const pulseElement = document.createElement("span");
            pulseElement.classList.add("pulse-indicator");
            activeLink.appendChild(pulseElement);
        }
    }
    
    // Remove from inactive links
    document.querySelectorAll(".nav-link:not(.active) .pulse-indicator").forEach(el => {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Toggle mobile menu
navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	hamburger.classList.toggle("active");
	document.body.classList.toggle("no-scroll");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("active");
		hamburger.classList.remove("active");
		document.body.classList.remove("no-scroll");
		
		// Update active link state
		navLinks.forEach(l => l.classList.remove("active"));
		link.classList.add("active");
		
		// Update visual effects
		if (removeGlowEffect) {
		    removeGlowEffect();
		    removeGlowEffect = createNavGlowEffect();
		}
		addPulseAnimationToActiveLink();
	});
});

// Highlight active nav link based on scroll position
function highlightNavLink() {
	const sections = document.querySelectorAll("section");
	let activeChanged = false;

	sections.forEach((section) => {
		const sectionId = section.getAttribute("id");
		const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

		if (!navLink) return;

		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.offsetHeight;

		if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
			if (!navLink.classList.contains("active")) {
				navLinks.forEach((link) => link.classList.remove("active"));
				navLink.classList.add("active");
				activeChanged = true;
			}
		}
	});
	
	// Update glow position if active link changed
	if (activeChanged && removeGlowEffect) {
		removeGlowEffect();
		removeGlowEffect = createNavGlowEffect();
		addPulseAnimationToActiveLink();
	}
}

// Initialize glow effect
let removeGlowEffect = createNavGlowEffect();

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", () => {
    highlightNavLink();
    addPulseAnimationToActiveLink();
});
window.addEventListener("resize", () => {
    if (removeGlowEffect) {
        removeGlowEffect();
        removeGlowEffect = createNavGlowEffect();
    }
    addPulseAnimationToActiveLink();
});

// Initial call to add pulse animation
addPulseAnimationToActiveLink();
