// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

///////////////////////
  
const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
}

const saudarCliente = nome => {
  const filtrarCliente = baseClientes.filter((nome) => {
    switch (nome.visitas) {
      case 1:
        return `Bem-vinda, ${nome}! Que bom que voltou!`
      case nome.visitas > 2:
        return `Bem-vinda mais uma vez, ${nome}!`
      default:
        return "Olá, é a primeira vez por aqui?"
    }
  })

  return filtrarCliente;
}

console.log(saudarCliente('Florinda'));
console.log(saudarCliente('Paty'));
console.log(saudarCliente('Clotilde'));
console.log(saudarCliente('Débora'));