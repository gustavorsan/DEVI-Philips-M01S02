let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1; // getMonth devolve o numero do mês começando por 0 que é janeiro
let diaAtual = dataAtual.getDate(); //retorna do dia atual do mês (1 a 31)

function obterEstacao(dia,mes){
  let estacao = '';
  switch(mes){
    case 1:
    case 2:
        estacao = 'Verão';
        break;
    case 3:
        estacao = dia > 22 ? "Outono" : "Verão";
        break;
    case 4:
    case 5:
        estacao = 'Outono';
        break;
    case 6:
        estacao = dia > 22 ? "Inverno" : "Outono";
        break;
    case 7:
    case 8:
        estacao = 'Inverno';
        break;
    case 9:
        estacao = dia > 22 ? "Primavera" : "Inverno";
        break;
    case 10:
    case 11:
        estacao = 'Primavera';
        break;
    case 12:
        estacao = dia > 22 ? "Verão" : "Primavera";
        break;
    default:
  }
  return `A estação atual é ${estacao}`;
}

alert(obterEstacao(diaAtual,mesAtual));






