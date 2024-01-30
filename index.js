const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-num");
const advice = document.querySelector(".advice");

window.onload = showQuote;

dice.addEventListener("click", function () {
  showQuote();
});

function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNum.textContent = data.id;
      advice.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}
