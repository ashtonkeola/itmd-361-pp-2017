function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

// Remove player for Javascript users

$(document).ready(function(){
  $("#doorbell").remove();
})

// Task Three

bell.addEventListener('click', function() {
  ringDoorbell();
});

// Bonus Task One
