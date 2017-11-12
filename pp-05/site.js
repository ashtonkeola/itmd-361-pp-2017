function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}



bell.addEventListener('click', function() {
  ringDoorbell();
});
