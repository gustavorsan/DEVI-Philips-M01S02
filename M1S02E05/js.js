/*Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.

Realize o commit do exercício resolvido.*/

let num = parseInt(prompt('Digite um número :'));

let impares = 0;
let pares = 0;

while(isNaN(num) || num < 0){
  num = parseInt(prompt('Digite um número válido:'));
}

for(let i = 0; i <= num; i++){
  if(i % 2 === 0){
    pares++
  }else{
    impares++;
  }
}

alert(`Quantidade de pares: ${pares} \n Quantidade  de impares: ${impares}`);