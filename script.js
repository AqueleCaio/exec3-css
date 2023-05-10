
const btnsOP = document.querySelectorAll('.calculadora-tecla-operador');
const btnsDigito = document.querySelectorAll('.calculadora-tecla-digito');
const btnEnter = document.querySelector('.calculadora-tecla-enter');
const btnLimpar = document.querySelector('#calculadora-tecla-limpar');
const btnDecimal = document.querySelector('#calculadora-tecla-decimal');
const mostrador = document.querySelector('.calculadora-saida');

const seqTeclas = []; 
let valorMostrador = '';
let mostradorLimpo = true;
let operando = '';

const formataSaida = (res) => {
    let t = res.toString().split('.');
    if(t.length == 2){
        if(t[1].length > 5)
            return res.toFixed(5);
        else
            return res;
    }
    return res;
}

const realizaOperacao = (op1,op2,operador) =>{
    let res = 0;
    switch (operador) {
        case '+':
            res = Number(op1) + Number(op2);
            break;
        case '-':
            res = Number(op1) - Number(op2);
            break;
        case '×': //U+00d7
            res = Number(op1) * Number(op2);
            break;
        case '÷':
            if(Number(op2)===0){
                alert('Impossível divisão por zero (0)');
                seqTeclas[0] = 'Erro';
                return;
            }
            res = Number(op1) / Number(op2);
            break;
    }
    seqTeclas[0] = formataSaida(res);
}

const executaOperacao = () => {
    seqTeclas.push(operando);
    realizaOperacao(seqTeclas[0],seqTeclas[2],seqTeclas[1]);
    mostrador.innerHTML = `${seqTeclas[0]}`;
    operando = '';
    mostradorLimpo = true;
    seqTeclas.length = 0;
    console.log(seqTeclas);
}

const limpaSaida = () => {
    operando = '';
    mostradorLimpo = true;
    seqTeclas.length = 0;
    mostrador.innerHTML = '0';
}

const atualizaSaida = (valorMostrador) => {
    if(mostradorLimpo){
        mostrador.innerHTML = valorMostrador;
        mostradorLimpo = false;
    }else
        mostrador.innerHTML += valorMostrador;
}

const leituraDigito = (e) => {
    operando += e.target.innerHTML;
    atualizaSaida(e.target.innerHTML);
}

const leituraOperador = (e) => {
    if(mostradorLimpo)
        return;
    atualizaSaida(e.target.innerHTML);
    seqTeclas.push(operando);
    seqTeclas.push(e.target.innerHTML);
    operando = '';
}

const leituraDecimal = () => {
    if(operando.includes('.'))
        return;
    operando += '.';
    atualizaSaida('.');
}

//Adicionando event listneres nos botoes
btnLimpar.addEventListener('click', limpaSaida);
btnEnter.addEventListener('click', executaOperacao);
btnDecimal.addEventListener('click',leituraDecimal);
for(const btnDigito of btnsDigito){
    btnDigito.addEventListener('click',leituraDigito);
}

for(const btnOP of btnsOP){
    btnOP.addEventListener('click',leituraOperador);
}