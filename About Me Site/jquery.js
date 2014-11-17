$(document).ready(function() {

  $(".info").hide();

  $("h1").click(function() {
    $(this).next().fadeIn(750);
    $("h1").hide();
    });

});
