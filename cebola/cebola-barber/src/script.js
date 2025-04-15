// Botão Hamburguer - mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !isHidden);
});

// Controle da alternância de imagens
let currentImage = 0; // Começamos com a primeira imagem

// Selecionar o container do carrossel e o track (faixa de imagens)
const carouselTrack = document.getElementById("carousel-track");
const images = carouselTrack.children;
const totalImages = images.length;

// Alternância automática de imagens (só inicia uma vez)
if (!window.imageIntervalStarted) {
  window.imageIntervalStarted = true;
  var interval = setInterval(toggleImages, 4000); // 3 segundos para alternar as imagens
}

// Função para alternar as imagens
function toggleImages() {
  if (totalImages > 1) {
    // Verifica se há mais de uma imagem
    currentImage = (currentImage + 1) % totalImages; // Avança para a próxima imagem, reiniciando quando chega ao final

    // Aplica a transição de 100% para mover o carrossel
    carouselTrack.style.transform = `translateX(-${currentImage * 100}%)`;
  }
}

// Alternar manualmente ao clicar no botão e parar o automático
document.getElementById("toggle-button").addEventListener("click", () => {
  toggleImages();
  clearInterval(interval); // Para a alternância automática quando o botão é clicado
});
