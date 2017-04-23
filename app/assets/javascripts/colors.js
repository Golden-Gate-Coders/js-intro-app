function changeColors() {
  var box = document.querySelector('.box');

  setTimeout(function() {
    box.style['background-color'] = 'red';
    setTimeout(function () {
      box.style['background-color'] = 'blue';
      box.style['color'] = 'white';
    }, 2000)
  }, 2000)
}