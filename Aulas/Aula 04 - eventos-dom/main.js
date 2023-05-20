var button = document.getElementById("button");
var square = document.getElementById("square");

function changeColor() {
  square.style.backgroundColor = "blue";
  console.log("Isso é outro evento DOM! ")
}
function resetColor(){
  square.style.backgroundColor = "red";
  console.log("Isso é mais umum evento DOM! ")
}

function handleClick() {
  console.log("Botão clicado!");
  console.log("Isso é um evento DOM! ")
}

button.addEventListener("click", handleClick);

square.addEventListener("mouseover", changeColor);
square.addEventListener("mouseout", resetColor);