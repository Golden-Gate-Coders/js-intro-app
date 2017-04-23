// // function showAlert() {
// //   alert("This is an alert! You have been infected.")
// // }


// // var randomBoxId = Math.floor((Math.random() * 3) + 1);

// // function clickedBox(boxNumber) {
// //   if (boxNumber == randomBoxId) {
// //     alert("You won!");
// //   }
// // }

// // var counter = 0;

// // function clickBox() {

// //   counter += 1
// //   console.log(counter);
// //   if (counter == 5) {
// //     alert("You clicked the box 5 times!");
// //   }
// // }

// box_1_clicked = false;
// box_2_clicked = false;
// box_3_clicked = false;

// function clickAllBox(boxNumber) {
//   if (boxNumber == 1) {
//     box_1_clicked = true;
//   } else if (boxNumber == 2) {
//     box_2_clicked = true;
//   } else if (boxNumber == 3) {
//     box_3_clicked = true;
//   }

//   if ((!!box_1_clicked) && (!!box_2_clicked) && (!!box_3_clicked)) {
//     alert("All boxes clicked!");
//   }

// }


function changeColor() {
  var box = document.querySelector('.box');

  if (box.style['background-color'] == 'red') {
    box.style['background-color'] = 'blue';
  } else {
    box.style['background-color'] = 'red'
  }


  var h1 = document.querySelector('h1');
  h1.innerHTML = "Text has changed!"


}





