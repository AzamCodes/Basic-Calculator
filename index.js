let buttonE1 = document.querySelectorAll("button");
let inputField = document.getElementById("result");

for (let i = 0; i < buttonE1.length; i++) {
  buttonE1[i].addEventListener("click", () => {
    const buttonValue = buttonE1[i].textContent;
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "=") {
      showResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearResult() {
  inputField.value = "";
}

function showResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}
