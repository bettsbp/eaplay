// business logic
function isLeap(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// user logic
$(function() {
  $("#isLeap").submit(function(event) {

    var year = parseInt($("#userInput").val());
    alert(isLeap(year));


    event.preventDefault();
  });
});
