// Main JavaScript file for Matcha Experience Website

document.addEventListener("DOMContentLoaded", function () {
	// Hide preloader when page is loaded
	const preloader = document.querySelector(".preloader");
	if (preloader) {
		setTimeout(() => {
			preloader.classList.add("hidden");
		}, 500);
	}

	// Animate quick navigation items
	const quickNavItems = document.querySelectorAll(".quick-nav-item");
	quickNavItems.forEach((item, index) => {
		item.style.opacity = "0";
		item.style.transform = "translateY(20px)";
		setTimeout(() => {
			item.style.transition = "opacity 0.4s ease, transform 0.4s ease, background-color 0.3s, color 0.3s, box-shadow 0.3s";
			item.style.opacity = "1";
			item.style.transform = "translateY(0)";
		}, 500 + index * 100); // Staggered animation
	});

	// Mobile Navigation Toggle
	const navToggle = document.querySelector(".nav-toggle");
	const navMenu = document.querySelector(".nav-menu");
	const body = document.body;

	if (navToggle) {
		navToggle.addEventListener("click", function () {
			navMenu.classList.toggle("active");

			// Toggle hamburger animation
			const hamburger = navToggle.querySelector(".hamburger");
			hamburger.classList.toggle("active");

			// Prevent body scrolling when menu is open
			body.classList.toggle("no-scroll");
		});
	}

	// Close mobile menu when clicking on a link
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			navMenu.classList.remove("active");
			if (navToggle) {
				const hamburger = navToggle.querySelector(".hamburger");
				hamburger.classList.remove("active");
			}
			body.classList.remove("no-scroll");
		});
	});

	// Recipe Modal Functionality
	const recipeCards = document.querySelectorAll('.recipe-card');
	const recipeModal = document.querySelector('.recipe-modal');
	const recipeModalClose = document.querySelector('.recipe-modal-close');
	const modalRecipeImg = document.getElementById('modal-recipe-img');
	const modalRecipeTitle = document.getElementById('modal-recipe-title');
	const modalRecipeSubtitle = document.getElementById('modal-recipe-subtitle');
	const modalRecipeFeatures = document.getElementById('modal-recipe-features');
	const modalRecipeInstructions = document.getElementById('modal-recipe-instructions');

	// Recipe data
	const recipeData = {
		'usucha': {
			title: 'Usucha',
			subtitle: 'Truyền thống Nhật Bản',
			image: 'images/usucha.jpg',
			features: [
				'Đây là cách thưởng thức matcha truyền thống của Nhật Bản',
				'Có thể cảm nhận được vị thuần túy của matcha mà không bị các nguyên liệu khác lấn át'
			],
			instructions: [
				'Ngâm <em>chasen</em> (chổi tre) trước trong nước ấm để các nan tre nở ra',
				'Sử dụng <em>chashaku</em> (muỗng tre) cho khoảng 2-4g matcha vào <em>chawan</em> (bát trà)',
				'Sau đó cho vào 60-80ml nước ấm ở nhiệt độ 70–85°C',
				'Hỗn hợp nước và bột trà được đánh tan hoàn toàn bằng <em>chasen</em> theo hình Zigzag để bọt lên đều và không vón cục',
				'Khi thưởng thức, <em>usucha</em> được dùng kèm với một chiếc bánh <em>wagashi</em> nhỏ để cân bằng vị đắng'
			]
		},
		'matcha-latte': {
			title: 'Matcha Latte',
			subtitle: 'Fusion Á - Âu',
			image: 'images/matcha-latte.jpg',
			features: [
				'Sự pha trộn giữa matcha truyền thống Nhật Bản và sữa tươi (hoặc các loại sữa hạt) phổ biến trong văn hóa cà phê phương Tây',
				'Vị đắng đặc trưng của matcha được làm dịu đi bởi vị béo ngậy của sữa',
				'Có thể điều chỉnh độ ngọt, thêm các loại syrup hoặc mứt theo sở thích cá nhân',
				'Có thể dùng nóng hoặc lạnh'
			],
			instructions: [
				'Sử dụng <em>chashaku</em> cho khoảng 3-5g matcha vào <em>chawan</em>',
				'Sau đó cho vào 30-50ml nước ấm ở nhiệt độ 70–85°C',
				'Dùng <em>chasen</em> (đã ngâm nước ấm) đánh tan hoàn toàn bột matcha với nước cho đến khi không còn vón cục và có một lớp bọt mỏng trên bề mặt',
				'Thêm 120-180ml sữa tươi (hoặc sữa thực vật như hạnh nhân, yến mạch, đậu nành) tùy theo nhu cầu',
				'Rót ra ly, thêm đá và thưởng thức',
				'Có thể thêm đường, mật ong, hoặc các loại syrup khác để tăng độ ngọt'
			]
		},
		'london-fog': {
			title: 'London Fog',
			subtitle: 'Fusion Đông - Tây',
			image: 'images/london-fog.jpg',
			features: [
				'Đậm vị trà do sự kết hợp giữa trà Earl Grey và Matcha giúp tăng độ tỉnh táo',
				'Mang lại sự mơ màng trong cả vị giác và hình thức, được ví như màn sương mù của thành phố London, Anh',
				'Không khuyến cáo sử dụng ban đêm và với người có triệu chứng về tim mạch, khó ngủ'
			],
			instructions: [
				'<strong>Pha syrup earl grey:</strong> Đun sôi hỗn hợp đường, nước, trà với tỉ lệ 1:1:1 đến khi sệt lại. Sau đó để nguội và có thể giữ trong tủ lạnh trong vòng 2 tuần',
				'Pha 1 gói trà earl grey túi lọc với 50ml nước ấm',
				'Sử dụng <em>chashaku</em> cho khoảng 3-5g matcha vào <em>chawan</em>',
				'Sau đó cho vào 30-50ml nước ấm ở nhiệt độ 70–85°C',
				'Dùng <em>chasen</em> (đã ngâm nước ấm) đánh tan hoàn toàn bột matcha với nước cho đến khi không còn vón cục và có một lớp bọt mỏng trên bề mặt',
				'Lần lượt cho syrup earl grey, trà earl grey và đá vào ly. Sau đó cho matcha lên trên cùng và thưởng thức'
			]
		},
		'cold-whisked': {
			title: 'Cold-Whisked Matcha Latte',
			subtitle: 'Phong cách hiện đại',
			image: 'images/cold-whisked-matcha-latte.jpg',
			features: [
				'Khá giống với matcha latte thông thường nhưng có hương vị đậm đà hơn',
				'Chỉ có thể uống lạnh',
				'Phù hợp với người bận rộn vì không cần dùng nước ấm'
			],
			instructions: [
				'Sử dụng <em>chashaku</em> cho khoảng 4-5g matcha vào cốc',
				'Sau đó cho vào 30-50ml sữa tươi (hoặc các loại sữa hạt tùy theo nhu cầu)',
				'Dùng <em>frother</em> đánh tan hoàn toàn bột matcha với sữa cho đến khi không còn vón cục và có một lớp bọt mỏng trên bề mặt',
				'Thêm 120-180ml sữa tươi (hoặc sữa thực vật như hạnh nhân, yến mạch, đậu nành) tùy theo nhu cầu',
				'Rót ra ly, thêm đá và thưởng thức',
				'Có thể thêm đường, mật ong, hoặc các loại syrup khác để tăng độ ngọt'
			]
		}
	};

	// Open modal with recipe details
	function openRecipeModal(recipeId) {
		const recipe = recipeData[recipeId];
		if (!recipe) return;
		
		modalRecipeImg.src = recipe.image;
		modalRecipeImg.alt = recipe.title;
		modalRecipeTitle.textContent = recipe.title;
		modalRecipeSubtitle.textContent = recipe.subtitle;
		
		// Clear and populate features
		modalRecipeFeatures.innerHTML = '';
		recipe.features.forEach(feature => {
			const li = document.createElement('li');
			li.innerHTML = feature;
			modalRecipeFeatures.appendChild(li);
		});
		
		// Clear and populate instructions
		modalRecipeInstructions.innerHTML = '';
		recipe.instructions.forEach(instruction => {
			const li = document.createElement('li');
			li.innerHTML = instruction;
			modalRecipeInstructions.appendChild(li);
		});
		
		// Show modal
		recipeModal.classList.add('active');
		document.body.classList.add('no-scroll');
	}

	// Close modal
	function closeRecipeModal() {
		recipeModal.classList.remove('active');
		document.body.classList.remove('no-scroll');
	}

	// Event listeners for recipe cards
	recipeCards.forEach(card => {
		card.addEventListener('click', () => {
			const recipeId = card.getAttribute('data-recipe');
			openRecipeModal(recipeId);
		});
	});

	// Close modal when clicking close button
	if (recipeModalClose) {
		recipeModalClose.addEventListener('click', closeRecipeModal);
	}

	// Close modal when clicking outside of modal content
	if (recipeModal) {
		recipeModal.addEventListener('click', (e) => {
			if (e.target === recipeModal) {
				closeRecipeModal();
			}
		});
	}

	// Close modal with ESC key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && recipeModal.classList.contains('active')) {
			closeRecipeModal();
		}
	});

	// Active link highlighting on scroll
	function highlightActiveLink() {
		const sections = document.querySelectorAll("section");
		const scrollPosition = window.scrollY + 100; // Offset for better accuracy

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href") === `#${sectionId}`) {
						link.classList.add("active");
					}
				});

				// Also highlight quick navigation items
				document.querySelectorAll(".quick-nav-item").forEach((item) => {
					item.classList.remove("active");
					if (item.getAttribute("href") === `#${sectionId}`) {
						item.classList.add("active");
					}
				});
			}
		});
	}

	window.addEventListener("scroll", highlightActiveLink);

	// Contact Form Submission
	const contactForm = document.getElementById("contactForm");
	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Get form values
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;

			// Simple form validation
			if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
				alert("Please fill in all fields");
				return;
			}

			// Simulate form submission (would be replaced with actual API call)
			console.log("Form data:", { name, email, message });
			alert(`Thank you, ${name}! Your message has been received.`);

			// Reset form
			contactForm.reset();
		});
	}

	// Back to top button functionality
	const backToTopBtn = document.getElementById("back-to-top");

	function toggleBackToTopBtn() {
		if (window.scrollY > 300) {
			backToTopBtn.classList.add("visible");
		} else {
			backToTopBtn.classList.remove("visible");
		}
	}

	window.addEventListener("scroll", toggleBackToTopBtn);

	if (backToTopBtn) {
		backToTopBtn.addEventListener("click", function (e) {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	// Add CSS class for hamburger menu when active
	if (navToggle) {
		navToggle.addEventListener("click", function () {
			const hamburger = this.querySelector(".hamburger");
			hamburger.classList.toggle("active");
		});
	}

	// Initial call to set active link on page load
	highlightActiveLink();

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
			}
		});
	});

	// Animate elements when they come into view
	const animateOnScroll = () => {
		const elements = document.querySelectorAll(".benefit-card, h2, #contactForm");

		elements.forEach((element) => {
			const elementPosition = element.getBoundingClientRect().top;
			const screenPosition = window.innerHeight / 1.3;

			if (elementPosition < screenPosition) {
				element.classList.add("animate");
			}
		});
	};

	// Add animation classes
	document.querySelectorAll(".benefit-card, h2, #contactForm").forEach((el) => {
		el.classList.add("animate-on-scroll");
	});

	// Check animations on scroll
	window.addEventListener("scroll", animateOnScroll);

	// Initial check for animations
	animateOnScroll();

	// Add parallax effect to home section
	window.addEventListener("scroll", function () {
		const homeSection = document.getElementById("home");
		if (homeSection) {
			const scrollPosition = window.pageYOffset;
			homeSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
		}
	});

	// Scroll to top button
	const scrollToTopBtn = document.getElementById("scroll-to-top");

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 300) {
			scrollToTopBtn.classList.add("visible");
		} else {
			scrollToTopBtn.classList.remove("visible");
		}
	});

	scrollToTopBtn.addEventListener("click", function (e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// Scroll reveal animation
	const revealElements = document.querySelectorAll(".reveal");

	function checkReveal() {
		const triggerBottom = window.innerHeight * 0.8;

		revealElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;

			if (elementTop < triggerBottom) {
				element.classList.add("active");
			}
		});
	}

	window.addEventListener("scroll", checkReveal);
	window.addEventListener("load", checkReveal);

	// Add reveal classes to elements
	function initRevealClasses() {
		// About section
		document.querySelector(".about-image").classList.add("reveal", "reveal-left");
		document.querySelector(".about-text").classList.add("reveal", "reveal-right");

		// Benefits cards
		document.querySelectorAll(".benefit-card").forEach((card, index) => {
			card.classList.add("reveal", "reveal-bottom");
			card.style.transitionDelay = `${index * 0.1}s`;
		});

		// Contact section
		document.querySelector(".contact-info").classList.add("reveal", "reveal-left");
		document.querySelector(".contact-form").classList.add("reveal", "reveal-right");

		// Testimonials section
		document.querySelector(".testimonials").classList.add("reveal", "reveal-bottom");
	}

	// Initialize reveal classes after DOM is fully loaded
	initRevealClasses();

	// Testimonial slider functionality
	const testimonialSlides = document.querySelectorAll(".testimonial-slide");
	const dots = document.querySelectorAll(".dot");
	let currentSlide = 0;

	function showSlide(index) {
		// Hide all slides
		testimonialSlides.forEach((slide) => {
			slide.classList.remove("active");
		});

		// Remove active class from all dots
		dots.forEach((dot) => {
			dot.classList.remove("active");
		});

		// Show the selected slide and activate dot
		testimonialSlides[index].classList.add("active");
		dots[index].classList.add("active");
		currentSlide = index;
	}

	// Click event for dots
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			showSlide(index);
		});
	});

	// Auto-rotate testimonials
	function autoRotateTestimonials() {
		let nextSlide = (currentSlide + 1) % testimonialSlides.length;
		showSlide(nextSlide);
	}

	// Set interval for auto-rotation
	const testimonialInterval = setInterval(autoRotateTestimonials, 5000);

	// Pause auto-rotation when hovering over testimonials
	const testimonialSlider = document.querySelector(".testimonial-slider");

	if (testimonialSlider) {
		testimonialSlider.addEventListener("mouseenter", () => {
			clearInterval(testimonialInterval);
		});

		testimonialSlider.addEventListener("mouseleave", () => {
			clearInterval(testimonialInterval);
			setInterval(autoRotateTestimonials, 5000);
		});
	}
});
