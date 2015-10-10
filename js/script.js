$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var bookInput = $("input#book").val();


    $('ul').append("bookInput");
    
    $('#list').show();
    event.preventDefault();
  });
});