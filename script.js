// Controlando a velocidade do letreiro com JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const letreiro = document.getElementById("letreiro");

    // Função para ajustar a velocidade
    function setVelocidade(velocidade) {
        const duracao = velocidade + "s";
        letreiro.style.animationDuration = duracao;
    }

    // Definindo a velocidade inicial (em segundos)
    setVelocidade(10);  // 10 segundos para ir e voltar
});
