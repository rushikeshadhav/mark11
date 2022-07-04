const inputDate = document.querySelector("#input-date");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#check-button");
const luckyAns = document.querySelector("#lucky-ans");

function calculate(dob) {
  const dobReplace = dob.replaceAll("-", "");
  let ans = 0;
  for (let i = 0; i < dobReplace.length; i++) {
    ans = ans + parseInt(dobReplace[i]);
    console.log(ans);
  }
  if (ans % luckyNumber.value == 0) {
    luckyAns.innerHTML = luckyNumber.value + " is a lucky Number 🥳 🥳 🥳 ";
  } else {
    luckyAns.innerHTML = luckyNumber.value + " is a not a lucky Number 😕 ";
  }
}

button.addEventListener("click", function () {
  calculate(inputDate.value);
});
