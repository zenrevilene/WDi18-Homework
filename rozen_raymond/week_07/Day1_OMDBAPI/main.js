// var moreDetails = function(.addEventListener('click', function(){
//   // Director
//   var newDirector = document.createElement("p");
//   newTitle.innerHTML = result[i].Director;
//   document.querySelector(".output" + i).appendChild(newDirector);
//
//   // Genre
//
//
//   // Year
//
//
//   // Actors
//
//
//   // Plot
//
//
// });



window.onload = function(){
  var btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    var search = document.querySelector(".search");
    var searchResult = search.value;
    var url = "http://omdbapi.com?s=" + searchResult;
    var request = new XMLHttpRequest();
    request.open("GET", url );
    request.send();

    request.onreadystatechange = function(){
      if (request.readyState !== 4)
      {
        return false;
      }
      var data = JSON.parse(request.responseText);
      console.log(data);

      var result = data.Search;
      var output ="";
      var title = "";
      if (result.length >= 1){
        for (var i =0; i < result.length; i++)
        {
          var parentDiv = document.createElement("div");
          parentDiv.className = "container";
          document.querySelector(".result").append(parentDiv);

          var newDiv = document.createElement("div");
          newDiv.className = "output" + i;
          document.querySelector(".container").appendChild(newDiv);

          // Set the images
          var newImage = document.createElement("img");
          newImage.src = result[i].Poster;
          document.querySelector(".output" + i).appendChild(newImage);


          // Set titles
          var newTitle = document.createElement("p");
          newTitle.innerHTML = result[i].Title;
          document.querySelector(".output" + i).appendChild(newTitle);

          // // More details
          var newMoreDetails = document.createElement("a");
          newMoreDetails.href = "#";
          newMoreDetails.innerHTML = "More Details";
          newMoreDetails.className = "more"+i;
          document.querySelector(".output" + i).appendChild(newMoreDetails);

          var moreDetails = document.querySelector(".more"+i);

        }
      }
      else{
        output = "No result found. Please try again";
      }


      // var title = data.Title;
      // var result = document.querySelector(".title");
      // result.innerHTML = title;
      //
      // var image = document.getElementById("poster");
      // image.src = data.Poster;



    };
  });
};
