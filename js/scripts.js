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
    $("#leapResult").show();
    var year = parseInt($("#userLeap").val());
    if (isLeap(year)) {
      $("#leapResult").append("<p>" + year + " is a leap year</p>");
    } else {
      $("#leapResult").append("<p>" + year + " isn't quite a leap year</p>");
    }


    event.preventDefault();
  });
});
