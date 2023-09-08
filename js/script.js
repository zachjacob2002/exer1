function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = `${firstNum} + ${secondNum}, equals to ${total}`;
}

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  let diffTotal = firstNum - secondNum; // Corrected the variable name
  document.getElementById("answer").innerHTML = `${firstNum} - ${secondNum}, equals to ${diffTotal}`;
}

document.getElementById('SumButton').addEventListener("click", displaySum); // Corrected the button ID
document.getElementById('DiffButton').addEventListener("click", displayDiff); // Corrected the button ID
