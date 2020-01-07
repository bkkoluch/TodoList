//crossing out lis by click
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

//fadeout and remove the li after clicking "X" span
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  //do not run adding 'done' class for li
  event.stopPropagation();
});

//entering the input string and pressing enter
$("input[type='text']").on("keypress", function(event) {
  if (event.which === 13) {
    //sending the input text to variable
    var nextTodo = $(this).val();
    //create li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i> </span>" + nextTodo + "</li>"
    );
    //clearing the input after hitting enter
    $(this).val("");
  }
});

$(".fa-plus").on("click", function() {
  $("input").fadeToggle();
});
