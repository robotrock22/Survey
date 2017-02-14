$(function() {
  $("select").children("option:first-child").hide();

  $("#inputs").submit(function(event) {
    var name = $("#name").val();
    var favfoods = $("#fav-foods").val();
    var music = $("#music").val();
    var color = $("#color").val();
    var hobbies = $("#hobbies").val();
    var iceCream =$("input:radio[name=flavor]:checked").val();

    $("#name-out").text(name);
    $("#fav-foods-out").text(favfoods);
    $("#music-out").text(music);
    $("#color-out").text(color);
    $("#hobbies-out").text(hobbies);
    $("#icecream-out").text(iceCream);

    event.preventDefault();
  });
});
