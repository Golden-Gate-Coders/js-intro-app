var total = 0;

function addNumber(number) {
  var sumDiv = document.querySelector('#sum');
  total += number;
  sumDiv.innerHTML = total;
}

function resetTotal() {
  total = 0;
  var sumDiv = document.querySelector('#sum');
  sumDiv.innerHTML = total;
}