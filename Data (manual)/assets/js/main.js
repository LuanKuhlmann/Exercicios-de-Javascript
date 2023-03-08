const h1 = document.querySelector('.container h1');
const data = new Date();

function getDia(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMes(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 0:
            mesTexto = 'Agosto';
            return mesTexto;
        case 1:
            mesTexto = 'Setembro';
            return mesTexto;
        case 2:
            mesTexto = 'Outubro';
            return mesTexto;
        case 3:
            mesTexto = 'Novembro';
            return mesTexto;
        case 4:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criarData(data){
    const diaSemana = data.getDay();
    const mes = data.getMonth();

    const nomeDia = getDia(diaSemana);
    const nomeMes = getMes(mes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
            `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
}
h1.innerHTML = criarData(data);