function setColor(time_of_day) {
  var body = document.querySelector('body');

  var color = '';

  if (time_of_day == 'morning') {
    color = 'yellow';
  } else if (time_of_day == 'afternoon') {
    color ='orange';
  } else if (time_of_day == 'evening') {
    color = 'black';
  }

  body.style['background-color'] = color;

}