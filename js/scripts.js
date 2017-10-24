$(document).ready(function() {
  $("#count").submit(function(event) {
    event.preventDefault();
    var userInputOne = parseInt($('#number1').val());
    var userInputTwo = parseInt($('#number2').val());
    for (var index = 0; index <= userInputOne; index += userInputTwo) {
      alert(index);
    };
  });
});
