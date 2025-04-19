// Botão do menu hamburguer - mostra/oculta o menu mobile
const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.onclick = () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !hidden);
};

// Função de agendamento (aqui você pode adaptar para integração futura)
function selecionarServico(servico) {
  alert(
    `Você selecionou o serviço: ${servico}. Em breve o agendamento estará disponível!`
  );
}
