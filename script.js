// CUET CSE Batch 24 - script.js

// 1. Loading screen
window.addEventListener("load", () => {
	document.querySelector(".loader")?.classList.add("fade-out");
});

// 2. Mobile Navigation Toggle
const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
if (toggleBtn && navMenu) {
	toggleBtn.addEventListener("click", () => {
		navMenu.classList.toggle("open");
	});
}

// 3. Scroll animations
const scrollElements = document.querySelectorAll(".scroll-fade");
const elementInView = (el, offset = 100) => {
	const elementTop = el.getBoundingClientRect().top;
	return elementTop <= window.innerHeight - offset;
};
const displayScrollElement = (element) => {
	element.classList.add("scrolled");
};
const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
		if (elementInView(el)) displayScrollElement(el);
	});
};
window.addEventListener("scroll", () => {
	handleScrollAnimation();
});

// 4. Back-to-top button
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
	window.addEventListener("scroll", () => {
		backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
	});

	backToTopBtn.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}

// 5. Progress Bar
const progressBar = document.querySelector(".progress-bar");
if (progressBar) {
	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const progress = (scrollTop / docHeight) * 100;
		progressBar.style.width = `${progress}%`;
	});
}

// 6. Particle Effects using tsParticles
if (window.tsParticles) {
	tsParticles.load("tsparticles", {
		particles: {
			number: { value: 50 },
			size: { value: 3 },
			move: { enable: true, speed: 1 },
			line_linked: {
				enable: true,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1,
			},
			color: { value: "#ffffff" },
		},
		interactivity: {
			events: {
				onhover: { enable: true, mode: "repulse" },
			},
		},
	});
}

// 7. Typing animation using Typed.js
if (window.Typed) {
	const typedTarget = document.querySelector(".typing-effect");
	if (typedTarget) {
		new Typed(".typing-effect", {
			strings: ["Coders", "Innovators", "Future Engineers"],
			typeSpeed: 60,
			backSpeed: 40,
			loop: true,
		});
	}
}

// 8. Matrix Rain Effect (Canvas)
const canvas = document.getElementById("matrix-canvas");
if (canvas) {
	const ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	const chars = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const fontSize = 14;
	const columns = canvas.width / fontSize;
	const drops = Array(Math.floor(columns)).fill(1);

	function draw() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#0F0";
		ctx.font = `${fontSize}px monospace`;

		for (let i = 0; i < drops.length; i++) {
			const text = chars[Math.floor(Math.random() * chars.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);

			if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}

	setInterval(draw, 33);
}
