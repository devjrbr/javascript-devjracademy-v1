let valor1 = 10
let valor2 = 20

// O que é uma estrutura de controle ? 
`É um bloco de código que permite controlar o fluxo de execução de um programa com base em determinadas condições, utilizando Loops`
// Quais os tipos de loop ?
`
- while
- for
- do while
- if/else
- switch/case
`

// while
`While significa enquanto. Então é uma comparação de valor com um valor fixo.`
while (valor1 < valor2) {
  console.log(valor1)
  valor1 = valor1 + 1
} 

// do while
`Do while significa Faça Enquanto. Então é uma comparação de valor com um valor fixo.`
do {
  console.log(valor1)
  valor1 = valor1 + 1
} while (valor1 < valor2)


// for
`For significa para. É um loop de iteração. Para cada X faça Y`

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// if/else
`if/else significa SE/SENÃO. É um loop de comparação. Se X = Y então faça W, senão faça Z`
if(valor1 === valor2) {
  console.log('Valores iguais')
} else {
  console.log('Valores diferentes')
}

// diferença entre = == e ===
`
A diferença entre os 'iguais'.
um igual '=' é o simbolo de atribuição.
let valor1 = 10

dois iguais '==' é comparação de valores
valor1 == valor2

três iguais '===' é comparação restrita, quer dizer que compara valor e tipo.
let valor1 = 10
let valor2 = '10'
valor1 === valor2 é false, porque valor1 é do tipo numero e valor2 é do tipo string
` 

// switch/case
`switch/case é uma comparação de valores, entre muitos valores, utilizando uma serie de expressões condicionais.`

switch(valor1) {
  case 10:
    console.log('Valor 10')
    break;
  case 20:
    console.log('Valor 20')
    break;
  case 30:
    console.log('Valor 30')
    break;
  default:
    console.log('Valor default')

}