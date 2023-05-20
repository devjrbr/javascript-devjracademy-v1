// O que são objetos ? 
`
  É uma estrutura de dados que permite armazenar e organizar valores e funcionalidades relacionadas. 
  Um objeto é uma coleção de propriedades, onde cada propriedade consiste em um nome (chave) e um valor associado.
`
// Como declarar um objeto ?
`
  A sintaxe para declarar um objeto é:
  const objeto = {
    chave: valor,
  }
`
const usuario = {
  name: 'Carlos',
  age: 29,
  email: 'carlos@email.com'
}
`
  Um objeto pode ser populado por outro objeto. Que pode ser populado por outro objeto.
  E por ai vai.
`

const usuario2 = {
  name: 'Carlos',
  age: 29,
  email: 'carlos@email.com',
  address: {
    city: 'Taubaté',
    state: 'SP',
  }
}

// O que é chave/valor ?

` 
  Chave/valor sao usadas para identificar um objeto.
  as chaves são usadas para identificar as propriedades do objeto.
  e os valores são usados para armazenar os dados do objeto.
` 

// O que são arrays ?
`
  É uma estrutura de dados que permite armazenar e organizar valores e funcionalidades relacionadas.
  Um array é uma coleção de valores.
  Um array pode ser populado por objetos.
  E por ai vai.
`
// Como declarar um array ?

const array = [1, 2, 3, 4, 5]
const usuarios = [
  {
    id: 1,
    name: 'Carlos',
    age: 29,
    email: 'carlos@email.com',
    address: {
      city: 'Taubaté',
      state: 'SP',
    }
  },
  {
    id: 2,
    name: 'Carlos',
    age: 29,
    email: 'carlos@email.com',
    address: {
      city: 'Taubaté',
      state: 'SP',
    }
  }
]


// O que são funcoes ?
`
são blocos de código que podem ser executados e reutilizados várias vezes para realizar uma tarefa específica. 
Elas são um dos principais blocos de construção da programação e desempenham um papel fundamental no
desenvolvimento de aplicativos.
`
// Como declarar uma funcao ?
`
  A sintaxe para declarar uma função é:
  function nomeDaFuncao(parametros) {
      O código vai aqui.   
  }
`
function soma(a, b) {
  return a + b
}

// O que é um parametro ?
`
  Um parâmetro, também conhecido como argumento, é uma informação fornecida a uma função durante sua declaração ou chamada.
  Em JavaScript, os parâmetros são usados para passar valores para uma função, permitindo que ela receba dados 
  externos e os utilize em suas operações.
`
// Como passar parametro para a função ?
`
  Os parametros são passados dentro do parenteses da função.
  Os parametros são usados para passar valores para uma função, permitindo que ela receba dados
  externos e os utilize em suas operações.
  No exemplo acima, os parametros a e b serão os dois numeros a serem somados. 
  Um parametro pode ser um objeto declarado anteriormente, no caso de um usuário.
`