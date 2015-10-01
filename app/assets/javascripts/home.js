function Films () {;
  $.getJSON("/movies.json").then(function(jsonData){

    var movies = jsonData.movies

    var low = movies.filter(function(movie){
         return movie.budget <= 80;
    });

    var lowTitles = low.map(function(movie){
        console.log(movie.title);
        return movie.title;
    });
    console.log(lowTitles);
    // var bestMovies = _.filter(movies,)
    lowTitles.forEach(function(movie){
      var pTag = "<p>" + movie + "</p>";
      $("#low-budgets").append(pTag)
    })

  });

};


$(window).ready(function(){
    $("#button").on("click", function(){
         Films()
     });
});
