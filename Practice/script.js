const inputNumber = document.getElementById("inputt");
const btn = document.getElementById("btn");
const ptag = document.getElementById("ptag");
const empty = document.getElementById("h");

const initialMessage = empty.textContent;

btn.addEventListener("click", () => {
  const inputNum = inputNumber.value.trim();
  const numberr = Number(inputNum);

  if (inputNum === "" || isNaN(numberr)) {
    empty.textContent = "Please Enter a Valid Number";
    return;
  }

  empty.textContent = initialMessage;

  if (numberr < 33) {
    ptag.textContent = "Fail";
  } else {
    ptag.textContent = "Pass +";
  }
});




