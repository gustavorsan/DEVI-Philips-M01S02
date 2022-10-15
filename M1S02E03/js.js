let num = parseInt(prompt('Digite um numero :'));
let tabuada = '';
while(isNaN(num)){
  num = parseInt(prompt('Digite um numero válido:'));
}

for( let i = 0; i <= 10; i++){
  tabuada += `${num} * ${i} = ${num*i}`;
  if(i < 10){
    tabuada += '\n'
  }
}

alert(tabuada);
