const letreiro = document.getElementById("letreiro");
const controleVelocidade = document.getElementById("velocidade");

// Função para ajustar a velocidade do letreiro dinamicamente
controleVelocidade.addEventListener("input", () => {
  const valor = controleVelocidade.value;
  letreiro.style.animationDuration = `${valor}s`;
});
