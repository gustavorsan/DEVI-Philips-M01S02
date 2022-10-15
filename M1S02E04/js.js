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
