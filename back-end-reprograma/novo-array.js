const pessoas = [
  {
    nomes: [ "João", "Larissa", "Paulo" ],
    idade: 25, 
  }, 
  {
    nomes: [ "Fernanda", "Bia", "Vinícius" ],
    idade: 17,
  }, 
  {
    nomes: [ "Isabela", "Elis", "Caio" ],
    idade: 34,
  }
];

let novoArrayDeNomes = [];

const iterarNovoArrayDeNomes = (arrayDePessoas) => {

  for(let i = 0; i < arrayDePessoas.length; i++) {
    novoArrayDeNomes = novoArrayDeNomes.concat(arrayDePessoas[i].nomes);
  }

  return novoArrayDeNomes;
}

console.log(iterarNovoArrayDeNomes(pessoas))
