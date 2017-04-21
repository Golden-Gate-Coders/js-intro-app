// function showAlert() {
//   alert("This is an alert! You have been infected.")
// }


var randomBoxId = Math.floor((Math.random() * 3) + 1);

function clickedBox(boxNumber) {
  if (boxNumber == randomBoxId) {
    alert("You won!");
  }
}

