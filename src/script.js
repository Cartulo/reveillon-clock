var dataAlvo = new Date("Jan 1, 2023 00:00:00").getTime();

var contador = setInterval(function () {
    conversorData();
}, 1000);

function conversorData() {
    let hoje = new Date().getTime();
    let distancia = dataAlvo - hoje;

    if (distancia < 0) {
        clearInterval(contador);
        return document.getElementById("countdown").innerHTML = "Já acabou filhote, agora só em 2024"
    }

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let diasFormatados = formatarValor(dias, dias.toString().length)

    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let horasFormatados = formatarValor(horas, horas.toString().length)

    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let minutosFormatados = formatarValor(minutos, minutos.toString().length)

    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    let segundosFormatados = formatarValor(segundos, segundos.toString().length)

    formatarData(diasFormatados, horasFormatados, minutosFormatados, segundosFormatados)
};

function formatarData(dias, horas, minutos, segundos) {
    document.getElementById("countdown").innerHTML = `${dias} dias<br>${horas}:${minutos}:${segundos}`;
    document.title = `Faltam ${dias} dias!`;
};

function formatarValor(num, targetLength) {
    if (num < 10) targetLength = targetLength + 1;
    return num.toString().padStart(targetLength, '0');
};