function validarOperacao(operacao){
  return operacao === '+' || operacao === '-' || operacao === '*' || operacao === '/';
}

function validarNumero(numero){
  return isNaN(numero);
}

let operacao = prompt("Digite uma operação[*, -, /, +]: ");
while(!validarOperacao(operacao)){
  operacao = prompt("Digite uma operação válida [*, -, /, +]: ");
}

let operador1 = prompt("Digite um número: ");
while(validarNumero(operador1)){
  operador1 = prompt("Digite um número válido: ");
}

let operador2 = prompt("Digite um número: ");
while(validarNumero(operador2)){
  operador2 = prompt("Digite um número válido: ");
}

let calculo = 0;

switch(operacao){
  case '*':
    calculo = operador1 * operador2;
  break;
  case '-': 
    calculo = operador1 - operador2; 
  break;
  case '/': 
    calculo = operador1 / operador2; 
  break;
  case '+': 
    calculo = operador1 + operador2; 
  break;
  default:
}

alert(`O resultado do seu cálculo é: ${calculo}`)
