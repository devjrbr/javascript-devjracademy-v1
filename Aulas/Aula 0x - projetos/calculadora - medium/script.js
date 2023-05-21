document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.getElementsByTagName("input");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      const value = event.target.value;

      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (value === "AC") {
        display.value = "";
      } else if (value === "DE") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += value;
      }
    });
  }
});