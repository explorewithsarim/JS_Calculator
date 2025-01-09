function btnClick(val) {
  let cal = document.getElementById(`display`);
  let currentValue = cal.value;
  // console.log(currentValue)
  let lastChar = currentValue.slice(-1);
  // console.log(lastChar)

  if (
    (lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/") &&
    (val === "+" || val === "-" || val === "*" || val === "/")
  ) {
    cal.value = currentValue.slice(0, -1);
  } else {
    cal.value += val;
  }
}
function solve() {
  let operation = document.getElementById(`display`).value;
  let calculation = eval(operation);
  document.getElementById(`display`).value = calculation;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function DellastCharacter() {
  let deleteLast = document.getElementById("display").value;
  let deleted = deleteLast.slice(0, -1);
  document.getElementById("display").value = deleted;
}
function operators() {
  let operatorcheck = document.getElementById("display").value;
}

function lastOperatorCheck() {
  let check = document.getElementById("display").value;
  let deleteOperator = check.slice;
}


