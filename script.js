$("#hide-button").click(function() {
   $("#ghost1").hide();
});

$("#show-button").click(function() {
   $("#ghost1").show();
});  

$("#say-boo").click(function() {
   $("#text").text("Boo!");
});

$("#say-bye").click(function() {
   $("#text").text("Bye!");
});

$("#make-yellow").click(function() {
   $("body").css("background-color","yellow");
});

$("#make-aqua").click(function() {
   $("body").css("background-color","aqua");
});

$("#happy-ghost").click(function() {
   $("#ghost1").hide();
   $("#ghost2").show();
});

$("#cool-ghost").click(function() {
   $("#ghost1").hide();
   $("#ghost2").hide();
   $("#ghost3").show();
});



