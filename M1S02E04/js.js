/**Utilizando estrutura de repetição, some os números digitados através do prompt enquanto o número for diferente de -1, 
 * quando digitado -1 pare de exibir o prompt e exiba através de um alert o resultado da soma dos números digitados.

Realize o commit do exercício resolvido. */

let soma = 0;
while(true){
  let num = parseInt(prompt('Digite um numero :'));
  if(num === -1 ) break;
  if(isNaN(num)){
    alert('Número inválido!!')
    continue;
  }
  soma += num;
}

alert(soma);
