'use strict'

const formatarDigito = (digito) => `0${digito}`.slice(-2);

function atualizar (tempo){
    const segundos = document.getElementById('segundos');
    const qtdSegundos = tempo % 60;
    
    const minutos = document.getElementById('minutos');
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    
    const horas = document.getElementById('horas');
    const qdtHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));

    const dias = document.getElementById('dias');
    const qtdDias = Math.floor (tempo / (60 * 60 * 24));

    // passar as informações pro html:
    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qdtHoras);
    dias.textContent = formatarDigito(qtdDias);
}

function contagemRegressiva (tempo){
    const pararContagem = () => clearInterval (id);
    const contar = () => {
        if(tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
        
    const id = setInterval ( contar, 1000);
}

function tempoRestante () {
    //1 de janeiro de 1970 começa a contar os milissegundos
    const dataEvento = new Date ('2023-02-02 14:00:00');
    const hoje = Date.now();
    return Math.floor ((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());