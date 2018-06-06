// business logic
function isLeap(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function toPigLatin(sentence) {
  var manipulate = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var temp;
  manipulate = sentence.toLowerCase().split("");

  // code goes below here

  vowels.forEach(function(vowel) {
    if(manipulate[0] === vowel) {
      //does something
    } else {
      //does something else
    }
  })

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

  $("#toPigLatin").submit(function(event) {
    var sentence = $("#userPig").val();
    alert(toPigLatin(sentence));

  });
});
