window.onload = function() {
  var board = document.querySelector('.board-js');
    board.addEventListener('click',function(event) {
      event.target.style.backgroundColor = 'red';
          });
};