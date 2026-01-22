// Modern Matcha Hood - JavaScript
document.addEventListener('DOMContentLoaded', function() {
	// Hide preloader after page loads
	const preloader = document.getElementById('preloader');
	setTimeout(() => {
		preloader.style.opacity = '0';
		preloader.style.pointerEvents = 'none';
	}, 800);

	// Mobile menu toggle
	const navToggle = document.getElementById('nav-toggle');
	const mobileMenu = document.getElementById('mobile-menu');
	const navMenu = document.getElementById('nav-menu');

	if (navToggle) {
		navToggle.addEventListener('click', () => {
			mobileMenu.classList.toggle('hidden');
		});
	}

	// Close mobile menu when clicking a link
	const allNavLinks = document.querySelectorAll('#mobile-menu a, #nav-menu a');
	allNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (mobileMenu) {
				mobileMenu.classList.add('hidden');
			}
		});
	});

	// Smooth scroll enhancement
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href !== '#' && href !== '#home') {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});

	// Intersection Observer for fade-in animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all sections for animation
	document.querySelectorAll('section').forEach(section => {
		section.style.opacity = '0';
		section.style.transform = 'translateY(20px)';
		section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
		observer.observe(section);
	});

	// Respect prefers-reduced-motion
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		document.querySelectorAll('*').forEach(el => {
			el.style.animationDuration = '0.01ms';
			el.style.transitionDuration = '0.01ms';
		});
	}

	// Add focus styles for accessibility
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Tab') {
			document.body.classList.add('keyboard-nav');
		}
	});

	document.addEventListener('mousedown', function() {
		document.body.classList.remove('keyboard-nav');
	});
});

// Add cursor-pointer to interactive elements
document.addEventListener('DOMContentLoaded', function() {
	const interactiveSelectors = [
		'a',
		'button',
		'[role="button"]',
		'input[type="submit"]',
		'input[type="button"]',
		'.cursor-pointer'
	];

	interactiveSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(el => {
			if (!el.classList.contains('no-cursor')) {
				el.style.cursor = 'pointer';
			}
		});
	});
});

// Lazy load images
if ('IntersectionObserver' in window) {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				if (img.dataset.src) {
					img.src = img.dataset.src;
					img.classList.remove('lazy');
				}
				imageObserver.unobserve(img);
			}
		});
	});

	document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
