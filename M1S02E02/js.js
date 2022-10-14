let idade = Number(window.prompt("Insira sua idade"));

let msg = "Jovens";

while(isNaN(idade) || idade < 0){
  idade = Number(window.prompt("Por favor ,insira uma idade valida "));
}

if(Math.floor(idade) > 16 && Math.floor(idade) < 64){
  msg = "Adultos";
}else  if(Math.floor(idade) > 64){
  msg= "Idosos"
}

alert(msg);

