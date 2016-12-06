var displayNumberOfPeople = function(data){
  var people = data.number;

  for (var i = 1; i <= people; i ++){
    var $img = $("<img>");
    $img.attr("src", "../images/astronaut.png");
    $(".people .result").prepend($img);
  }

  // var $p = $("<p></p>");
  // $p.text(people);
  //
  // $(".people .result").prepend($p);
};


var getNumberOfPeople = function(){
  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    dataType: "JSONP"
  }).done(displayNumberOfPeople);
};

$(document).ready(function(){

  // window.setInterval(getNumberOfPeople, 5000);
  $(".peopleButton").on("click", function(){
    getNumberOfPeople();
  });
});
