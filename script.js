// Future of Technology Section Interactive JavaScript
document.addEventListener("DOMContentLoaded", function () {
	// Initialize all interactive features
	initFutureTechAnimations();
	initWelcomeBatch24Effects();
	initScrollAnimations();
	initTypingEffect();
	initParticleBackground();

	// Future of Technology Section Animations
	function initFutureTechAnimations() {
		const techSection = document.querySelector(".future-of-technology");
		const techItems = document.querySelectorAll(".tech-item");

		if (techSection) {
			// Add staggered entrance animation for tech items
			techItems.forEach((item, index) => {
				item.style.opacity = "0";
				item.style.transform = "translateY(30px)";

				setTimeout(() => {
					item.style.transition = "all 0.6s ease";
					item.style.opacity = "1";
					item.style.transform = "translateY(0)";
				}, index * 200);
			});

			// Add floating animation
			setInterval(() => {
				techItems.forEach((item, index) => {
					const delay = index * 100;
					setTimeout(() => {
						item.style.transform = "translateY(-10px)";
						setTimeout(() => {
							item.style.transform = "translateY(0)";
						}, 1000);
					}, delay);
				});
			}, 4000);
		}
	}

	// WelcomeBatch24.java Interactive Effects
	function initWelcomeBatch24Effects() {
		const javaElements = document.querySelectorAll(
			'.welcomebatch24-java, .code-welcomebatch24, #welcomebatch24, [class*="welcomebatch24"]'
		);

		javaElements.forEach((element) => {
			// Add click event for code highlighting
			element.addEventListener("click", function () {
				// Create ripple effect
				createRippleEffect(this);

				// Flash effect
				this.style.background = "rgba(0, 255, 153, 0.3)";
				setTimeout(() => {
					this.style.background = "rgba(0, 212, 170, 0.1)";
				}, 200);

				// Copy to clipboard if it's a filename
				if (this.textContent.includes(".java")) {
					copyToClipboard(this.textContent);
					showTooltip(this, "Copied to clipboard!");
				}
			});

			// Add double-click event for syntax highlighting simulation
			element.addEventListener("dblclick", function () {
				simulateCodeHighlight(this);
			});

			// Add hover sound effect (optional - can be enabled)
			element.addEventListener("mouseenter", function () {
				// playHoverSound(); // Uncomment if you want sound effects
				addGlitchEffect(this);
			});
		});
	}

	// Scroll-based animations
	function initScrollAnimations() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-in");

						// Special animation for future tech section
						if (entry.target.classList.contains("future-of-technology")) {
							animateCounters(entry.target);
							startMatrixRain(entry.target);
						}
					}
				});
			},
			{
				threshold: 0.3,
			}
		);

		// Observe all relevant elements
		const elementsToObserve = document.querySelectorAll(
			".future-of-technology, .welcomebatch24-java, .tech-item"
		);
		elementsToObserve.forEach((el) => observer.observe(el));
	}

	// Typing effect for headings
	function initTypingEffect() {
		const techHeading = document.querySelector(".future-of-technology h2");
		if (techHeading) {
			const originalText = techHeading.textContent;
			techHeading.textContent = "";

			let i = 0;
			const typeWriter = () => {
				if (i < originalText.length) {
					techHeading.textContent += originalText.charAt(i);
					i++;
					setTimeout(typeWriter, 100);
				} else {
					// Add blinking cursor
					techHeading.innerHTML += '<span class="cursor">|</span>';
					blinkCursor();
				}
			};

			// Start typing after a delay
			setTimeout(typeWriter, 1000);
		}
	}

	// Particle background effect
	function initParticleBackground() {
		const techSection = document.querySelector(".future-of-technology");
		if (techSection) {
			createParticleCanvas(techSection);
		}
	}

	// Helper Functions
	function createRippleEffect(element) {
		const ripple = document.createElement("span");
		const rect = element.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);

		ripple.style.width = ripple.style.height = size + "px";
		ripple.style.left = "50%";
		ripple.style.top = "50%";
		ripple.style.transform = "translate(-50%, -50%)";
		ripple.classList.add("ripple");

		// Add CSS for ripple if not exists
		if (!document.querySelector("#ripple-styles")) {
			const style = document.createElement("style");
			style.id = "ripple-styles";
			style.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(0, 255, 153, 0.6);
                    animation: ripple-animation 0.6s linear;
                    pointer-events: none;
                }
                @keyframes ripple-animation {
                    to { transform: translate(-50%, -50%) scale(2); opacity: 0; }
                }
            `;
			document.head.appendChild(style);
		}

		element.style.position = "relative";
		element.appendChild(ripple);

		setTimeout(() => {
			ripple.remove();
		}, 600);
	}

	function copyToClipboard(text) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
		} else {
			// Fallback for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);
		}
	}

	function showTooltip(element, message) {
		const tooltip = document.createElement("div");
		tooltip.textContent = message;
		tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 1000;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        `;

		element.style.position = "relative";
		element.appendChild(tooltip);

		setTimeout(() => {
			tooltip.remove();
		}, 2000);
	}

	function simulateCodeHighlight(element) {
		const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"];
		const originalColor = element.style.color;

		let colorIndex = 0;
		const highlightInterval = setInterval(() => {
			element.style.color = colors[colorIndex];
			colorIndex = (colorIndex + 1) % colors.length;
		}, 200);

		setTimeout(() => {
			clearInterval(highlightInterval);
			element.style.color = originalColor;
		}, 2000);
	}

	function addGlitchEffect(element) {
		element.style.animation = "glitch 0.3s ease-in-out";

		// Add glitch CSS if not exists
		if (!document.querySelector("#glitch-styles")) {
			const style = document.createElement("style");
			style.id = "glitch-styles";
			style.textContent = `
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
            `;
			document.head.appendChild(style);
		}

		setTimeout(() => {
			element.style.animation = "";
		}, 300);
	}

	function animateCounters(section) {
		const counters = section.querySelectorAll(".counter");
		counters.forEach((counter) => {
			const target = parseInt(counter.dataset.target) || 100;
			let current = 0;
			const increment = target / 100;

			const updateCounter = () => {
				if (current < target) {
					current += increment;
					counter.textContent = Math.ceil(current);
					requestAnimationFrame(updateCounter);
				} else {
					counter.textContent = target;
				}
			};

			updateCounter();
		});
	}

	function blinkCursor() {
		const cursor = document.querySelector(".cursor");
		if (cursor) {
			setInterval(() => {
				cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
			}, 500);
		}
	}

	function createParticleCanvas(container) {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");

		canvas.style.position = "absolute";
		canvas.style.top = "0";
		canvas.style.left = "0";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.pointerEvents = "none";
		canvas.style.zIndex = "1";

		container.style.position = "relative";
		container.appendChild(canvas);

		// Resize canvas
		function resizeCanvas() {
			canvas.width = container.offsetWidth;
			canvas.height = container.offsetHeight;
		}

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Particle system
		const particles = [];
		const particleCount = 50;

		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 2,
				vy: (Math.random() - 0.5) * 2,
				size: Math.random() * 3 + 1,
				opacity: Math.random() * 0.5 + 0.2,
			});
		}

		function animateParticles() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				particle.x += particle.vx;
				particle.y += particle.vy;

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

				// Draw particle
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
				ctx.fill();
			});

			requestAnimationFrame(animateParticles);
		}

		animateParticles();
	}

	function startMatrixRain(container) {
		// Create matrix rain effect (optional advanced feature)
		const matrixChars = "01";
		const drops = [];

		// This would create a matrix-style digital rain effect
		// Implementation can be expanded based on specific needs
	}

	// Optional: Add keyboard shortcuts
	document.addEventListener("keydown", function (e) {
		// Ctrl + J to highlight all Java elements
		if (e.ctrlKey && e.key === "j") {
			e.preventDefault();
			const javaElements = document.querySelectorAll(
				'[class*="welcomebatch24"]'
			);
			javaElements.forEach((el) => {
				el.style.background = "rgba(255, 215, 0, 0.3)";
				setTimeout(() => {
					el.style.background = "rgba(0, 212, 170, 0.1)";
				}, 1000);
			});
		}
	});

	// Performance optimization: Throttle scroll events
	let scrollTimeout;
	window.addEventListener("scroll", function () {
		if (scrollTimeout) {
			clearTimeout(scrollTimeout);
		}
		scrollTimeout = setTimeout(function () {
			// Add any scroll-based functionality here
		}, 16); // ~60fps
	});

	console.log("🚀 Future of Technology JavaScript initialized successfully!");
});

// Export functions for external use (if needed)
window.FutureTechJS = {
	version: "1.0.0",
	reinitialize: function () {
		// Re-run initialization if content is dynamically loaded
		document.dispatchEvent(new Event("DOMContentLoaded"));
	},
};
