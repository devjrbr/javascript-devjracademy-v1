// O que são Variáveis e constantes ?
console.log('Uma variável é um contêiner nomeado que armazena um valor ou uma referência')
console.log('a um valor em um programa de computador.')
console.log('Em outras palavras, variaveis e constantes são espaços alocados em memória, para utilização futura do script.');

// Como declarar uma variável ou constante ? 
var nome = 'Carlos';
let idade = 29
var devDesde = 2020;
const vivo = true

var errado1 = '1nome';
const errado2 = '2nome';
const errado3 = 'Número';

// Qual a diferença entre var let e const  ? 
let local = 'isso é uma variável local'
var Global = 'isso é uma variável global' 
const constante = 'isso é uma constante, não muda nunca'


// O que são tipos primitivos ? 
`Tipos primitivos são os tipos de dados básicos e fundamentais oferecidos por uma linguagem de
programação. Eles são chamados de "primitivos" porque não são compostos por outros valores ou 
estruturas de dados. São tipos simples e indivisíveis que representam valores básicos.`
// Quais são os tipos primitivos ? 
let string = 'string'
let number = 00
let boolean = true
let nulo = null
console.log(undefined)
Symbol('symbol')
// O que são operadores lógicos ?
`Os operadores lógicos em JavaScript são utilizados para realizar operações de lógica booleana em expressões 
condicionais. Eles permitem combinar e avaliar o estado lógico de valores booleanos (verdadeiro ou falso) ou 
expressões condicionais.`
// Quais são os operadores lógicos ?
`&& || ! ` 

let E = '&& = E'
`ambos valores devem ser verdadeiro para a condição ser verdadeira. Valor1 && Valor2 = true`
let OU = '|| = OU'
`qualquer valor deve ser verdadeiro para a condição ser verdadeira. Valor1 || Valor2 = true`
let negacao = '!'
`Nega a afirmação. Valor1 = true. !Valor1 = false`

// tarefas o proximo encontro : Concatenação de string, formando uma frase utilizando variável + texto