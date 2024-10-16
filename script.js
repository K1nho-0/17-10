function verificarResposta(faseAtual, respostaCorreta) {
    const input = document.getElementById(`resposta${faseAtual}`);
    const resposta = input.value.trim().toLowerCase();

    if (resposta === respostaCorreta.toLowerCase()) {
        piscarVerde(); // Corrigida a chamada da função
        avancarFase(faseAtual);
    } else {
        piscarVermelha(); // Corrigida a chamada da função
    }
}

// Função para iniciar piscada verde
function piscarVerde() {
    document.body.classList.add('piscada-verde');
    setTimeout(() => {
        document.body.classList.remove('piscada-verde');
    }, 1000); // A piscada dura 1 segundo
}

// Função para iniciar piscada vermelha
function piscarVermelha() {
    document.body.classList.add('piscada-vermelha');
    setTimeout(() => {
        document.body.classList.remove('piscada-vermelha');
    }, 1000); // A piscada dura 1 segundo
}

function avancarFase(faseAtual) {
    const faseAtualDiv = document.getElementById(`fase${faseAtual}`);
    const proximaFaseDiv = document.getElementById(`fase${faseAtual + 1}`);

    faseAtualDiv.classList.remove('active');
    if (proximaFaseDiv) {
        proximaFaseDiv.classList.add('active');
    } else {
        alert("Parabéns! Você completou todas as fases!");
    }
}

// Iniciar na primeira fase
document.getElementById('fase1').classList.add('active');
