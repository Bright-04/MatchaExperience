// Get the header element
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

// Function to handle the header scroll effect
function handleScroll() {
	if (window.scrollY > 100) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
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
	});
});

// Highlight active nav link based on scroll position
function highlightNavLink() {
	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		const sectionId = section.getAttribute("id");
		const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

		if (!navLink) return;

		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.offsetHeight;

		if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
			navLinks.forEach((link) => link.classList.remove("active"));
			navLink.classList.add("active");
		}
	});
}

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);
