const rootWrapper = document.querySelector("[data-root-wrapper]");
const particles = [];
const particlesNumber = 20;
const SPEED_MULTIPLIER = 0.5;

class Particle {
  constructor(span, speedX, speedY) {
    this.span = span;
    this.size = span.offsetWidth;
    this.x = Math.random() * (document.documentElement.scrollWidth - this.size);
    this.y = Math.random() * (document.documentElement.scrollHeight - this.size * 2);
    this.speedX = speedX * SPEED_MULTIPLIER;
    this.speedY = speedY * SPEED_MULTIPLIER;
    //
    this.span.style.left = `${this.x}px`;
    this.span.style.top = `${this.y}px`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + this.size > document.body.scrollWidth || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.size > document.body.scrollHeight || this.y < 0) {
      this.speedY *= -1;
    }
    this.span.style.left = `${this.x}px`;
    this.span.style.top = `${this.y}px`;
  }
}

function createParticleElement() {
  const span = document.createElement("span");
  span.classList.add("particle");
  span.style.width = `${Math.random() * 50}px`;
  rootWrapper.appendChild(span);
  return span;
}

function init() {
  for (let i = 0; i < particlesNumber; i++) {
    const speedX = Math.random() - 0.5;
    const speedY = Math.random() - 0.5;
    const span = createParticleElement();
    particles.push(new Particle(span, speedX, speedY));
  }
}

function animate() {
  particles.forEach((particle) => {
    particle.update();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  init();
  animate();
});

window.addEventListener("resize", () => {
  particles.forEach((particle) => {
    particle.x = Math.random() * (document.documentElement.scrollWidth - particle.size);
    particle.y = Math.random() * (document.documentElement.scrollHeight - particle.size);
    particle.update();
  });
});
