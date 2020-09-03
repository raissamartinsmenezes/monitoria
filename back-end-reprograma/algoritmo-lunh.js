// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

///////////////////////

const luhnValidador = numeroDoCartao => {
  let arrayDoCartao = numeroDoCartao.toString().split("");
  let ultimoDigito = arrayDoCartao.pop();
  console.log(ultimoDigito, "ultimoDigito")
  let arrayDoCartaoOrdemInversa = arrayDoCartao.reverse();
  console.log(arrayDoCartaoOrdemInversa, "arrayDoCartaoOrdemInversa");
  let somaDosDigitos = 0;

  for(let i = 0; i < arrayDoCartaoOrdemInversa.lenght; i++){
    if(i % 2 !== 0){
      console.log(i);
      if(arrayDoCartaoOrdemInversa[i] > 9) {
        console.log(arrayDoCartaoOrdemInversa[i])
        somaDosDigitos += (arrayDoCartaoOrdemInversa[i] * 2) - 9;
        console.log(somaDosDigitos, "primeiro if")
      } else {
        somaDosDigitos += arrayDoCartaoOrdemInversa[i] * 2;
        console.log(somaDosDigitos, "primeiro else")
      }
    } else {
      somaDosDigitos += arrayDoCartaoOrdemInversa[i];
      console.log(somaDosDigitos, "primeiro else")
    }
  }

  somaDosDigitos += ultimoDigito;
  console.log(somaDosDigitos, "somaDosDigitos");
  return somaDosDigitos % 10 === 0;
}

console.log(luhnValidador(6011329933655299)); //false
console.log(luhnValidador(5381579886310193)); //true
console.log(luhnValidador(4485275742308327)); //true
console.log(luhnValidador(123456789)); //false

