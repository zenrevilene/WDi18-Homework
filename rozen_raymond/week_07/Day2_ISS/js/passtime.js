var baseURL = "http://api.open-notify.org/iss-pass.json";


var displayPasstime = function(data){
  var risetime = new Date( 1000 * data.response[ 0 ].risetime );
  var duration = ( data.response[ 0 ].duration / 60 ).toFixed( 2 );
  console.log( "A", risetime, duration );
  var $p = $("#timeAndDuration");
  $p.text("Risetime: " + risetime + ", Duration: " + duration + " seconds");

  $(".passtime .result").prepend($p);


};


var getPasstime = function(){
  console.log( "ASD" );
  $.ajax({
    url: baseURL,
    type: "GET",
    dataType: "JSONP",
    data: {
      lat: 33.8698,
      lon: 151.2064
    }
  }).done(displayPasstime);
};

$(document).ready(function(){
  window.setInterval(getPasstime, 500);
  // $(".passtimeButton").on( "click", function(){
  //   // var lat = $(".lat input").val();
  //   // var long= $(".long input").val();
  //
  //   getPasstime(lat, long);
  // });
});
