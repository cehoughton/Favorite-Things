$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var bookInput = $("input#book").val();
    var movieInput = $("input#movie").val();
    var colorInput = $("input#color").val();
    var planetInput = $("input#planet").val();

    $('.book').append(bookInput);
    $('.movie').append(movieInput);
    $('.color').append(colorInput);

    $('#list').show();
    event.preventDefault();
  });
});