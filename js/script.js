$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var bookInput = $("input#book").val();
    var movieInput = $("input#movie").val();
    var colorInput = $("input#color").val();
    var planetInput = $("input#planet").val();
    var seasonInput = $("input#season").val();

    // $('.book').text(bookInput);
    // $('.movie').text(movieInput);
    // $('.color').text(colorInput);
    // $('.planet').text(planetInput);
    // $('.season').text(seasonInput);
    //
    //
    var array = [bookInput, movieInput, colorInput, planetInput, seasonInput];

    array.forEach(function(item){
      $('#unordered').append('<li>'+item+'</li>');
    });
  

    $('#list').show();

    event.preventDefault();
  });
});
