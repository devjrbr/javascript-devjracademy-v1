export default [
  {
    id: 1,
    question: 'Qual é a sintaxe correta para declarar uma variável em JavaScript?',
    answers: [
      { option: 'variable x;', correct: false },
      { option: 'var x;', correct: true },
      { option: 'v x;', correct: false },
      { option: 'new Variable x;', correct: false },
    ]
  },
  {
    id: 2,
    question: 'Qual é a forma correta de exibir "Hello, World!" no console em JavaScript?',
    answers: [
      { option: 'print("Hello, World!");', correct: false },
      { option: 'log("Hello, World!");', correct: false },
      { option: 'console.log("Hello, World!");', correct: true },
      { option: 'console.print("Hello, World!");', correct: false },
    ]
  },
  {
    id: 3,
    question: 'Qual é o operador usado para atribuição em JavaScript?',
    answers: [
      { option: '=', correct: true },
      { option: '==', correct: false },
      { option: '===', correct: false },
      { option: ':=', correct: false },
    ]
  },
  {
    id: 4,
    question: 'Qual é a função usada para arredondar um número para o inteiro mais próximo em JavaScript?',
    answers: [
      { option: 'Math.floor()', correct: false },
      { option: 'Math.round()', correct: true },
      { option: 'Math.ceil()', correct: false },
      { option: 'Math.random()', correct: false },
    ]
  },
  {
    id: 5,
    question: 'Qual é a maneira correta de escrever um comentário em JavaScript?',
    answers: [
      { option: '// Este é um comentário', correct: true },
      { option: '<!-- Este é um comentário -->', correct: false },
      { option: '# Este é um comentário', correct: false },
      { option: '/* Este é um comentário */', correct: false },
    ]
  },
  {
    id: 6,
    question: 'Qual é o método usado para adicionar um elemento no final de um array em JavaScript?',
    answers: [
      { option: 'array.add()', correct: false },
      { option: 'array.push()', correct: true },
      { option: 'array.insert()', correct: false },
      { option: 'array.append()', correct: false },
    ]
  },
  {
    id: 7,
    question: 'Qual é o resultado da expressão 2 + "2" em JavaScript?',
    answers: [
      { option: '4', correct: false },
      { option: '22', correct: true },
      { option: 'NaN', correct: false },
      { option: 'Erro de sintaxe', correct: false },
    ]
  },
  {
    id: 8,
    question: 'Qual é o método usado para remover o último elemento de um array em JavaScript?',
    answers: [
      { option: 'array.delete()', correct: false },
      { option: 'array.remove()', correct: false },
      { option: 'array.pop()', correct: true },
      { option: 'array.splice()', correct: false },
    ]
  },
  {
    id: 9,
    question: 'Qual é o operador usado para concatenar strings em JavaScript?',
    answers: [
      { option: '+', correct: true },
      { option: '*', correct: false },
      { option: '-', correct: false },
      { option: '/', correct: false },
    ]
  },
  {
    id: 10,
    question: 'Qual é o método usado para converter uma string em minúsculas em JavaScript?',
    answers: [
      { option: 'toLowerCase()', correct: true },
      { option: 'toLower()', correct: false },
      { option: 'toUpperCase()', correct: false },
      { option: 'toUpper()', correct: false },
    ]
  }
]