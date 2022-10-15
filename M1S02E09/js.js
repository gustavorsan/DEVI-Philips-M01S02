let numInicial = parseInt(prompt('Digite um numero :'));
let mensagem = 'P.A. =';
while(isNaN(numInicial)){
  numInicial = parseInt(prompt('Digite um numero válido:'));
}
let raiz = parseInt(prompt('Digite a raiz :'));
while(isNaN(raiz)){
  raiz = parseInt(prompt('Digite uma raiz válida:'));
}

for(let i = 0; i < 10; i++){
  if(i === 0 ){
    mensagem += ` ${numInicial},`
  }else if(i < 9){
    mensagem += ` ${numInicial+raiz},`
    numInicial = numInicial+raiz;
  }else{
    mensagem += ` ${numInicial+raiz}.`
  }
  
}

alert(mensagem);
