// O que é a DOM ?
`
é uma representação em memória do conteúdo de um documento HTML ou XML, 
que pode ser manipulada por meio de código JavaScript. Ela permite que você acesse 
elementos individuais, modifique seu conteúdo, adicione ou remova elementos e responda a eventos do usuário.
`
// O que são os eventos DOM ?
`
Eventos DOM são ações ou ocorrências que acontecem em elementos HTML dentro de um 
documento web. Esses eventos podem ser acionados pelo usuário, como cliques do mouse, 
pressionamentos de teclas ou movimentos do mouse, ou podem ser eventos gerados pelo navegador, 
como o carregamento completo da página.
click,
load,
submit,
mouseover,
ect.
`
// Como manipular os eventos DOM ?
` 
var botao = document.getElementById("meuBotao");

function handleClick() {
  console.log("Botão clicado!");
}

botao.addEventListener("click", handleClick);

`