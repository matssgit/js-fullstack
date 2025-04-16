// Botão do menu hamburguer - mostra/oculta o menu mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// Carrossel de imagens (modo mobile)
const carouselTrack = document.getElementById("carousel-track");
const images = carouselTrack.children;
let currentImage = 0;
let interval;

// Verifica se o layout atual é mobile
const isMobile = () => window.innerWidth <= 640;

// Alterna para a próxima imagem no carrossel
const toggleImages = () => {
  if (images.length > 1) {
    currentImage = (currentImage + 1) % images.length;
    carouselTrack.style.transform = `translateX(-${currentImage * 100}%)`;
  }
};

// Inicia a alternância automática das imagens
const startImageInterval = () => {
  if (!interval) interval = setInterval(toggleImages, 4000);
};

// Para o carrossel e reseta a imagem inicial
const stopImageInterval = () => {
  clearInterval(interval);
  interval = null;
  carouselTrack.style.transform = "translateX(0)";
  currentImage = 0;
};

// Ativa ou desativa o carrossel ao redimensionar a tela
addEventListener("resize", () => {
  isMobile() ? startImageInterval() : stopImageInterval();
});

// Inicia o carrossel apenas se estiver no mobile ao carregar a página
addEventListener("DOMContentLoaded", () => {
  if (isMobile()) startImageInterval();
});
