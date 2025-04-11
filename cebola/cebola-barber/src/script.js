// Botão Hamburguer - mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !isHidden);
});

// Fazer a imagem mexer sozinha e sumir no modo mobile.
let currentImage = 1; // Começamos com a imagem 1 visível

// Alternância automática de imagens (só inicia uma vez)
if (!window.imageIntervalStarted) {
  window.imageIntervalStarted = true;
  var interval = setInterval(toggleImages, 3000);
}

// Alternar entre as imagens
function toggleImages() {
  const image1 = document.getElementById("image-1");
  const image2 = document.getElementById("image-2");

  if (currentImage === 1) {
    image1.classList.add("hidden");
    image2.classList.remove("hidden");
    currentImage = 2;
  } else {
    image2.classList.add("hidden");
    image1.classList.remove("hidden");
    currentImage = 1;
  }
}

// Alternar manualmente ao clicar no botão e parar o automático
document.getElementById("toggle-button").addEventListener("click", () => {
  toggleImages();
  clearInterval(interval);
});
