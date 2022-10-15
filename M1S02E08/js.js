let quantidadeNumPrimo = 0;

function validarNumeroPrimo(numero){
  let divisores = 0
  for(let i = 1; i <= numero; i++){
    if(numero % i === 0 ){
      divisores++;
    }
  }
  
  return divisores === 2;
}

for(let numero = 0; numero <= 1000; numero++ ){
  if(validarNumeroPrimo(numero)){
    quantidadeNumPrimo++;
  }
}

alert(`A quantidade de numero primos ente 0 e 1000 é ${quantidadeNumPrimo}`);