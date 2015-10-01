function Films () {;
  $.getJSON("/movies.json").then(function(jsonData){

    var movies = jsonData.movies

    var low = _.filter(movies, function(movie){
         return movie.budget <= 80;
    });
    // var bestMovies = _.filter(movies,)
    $("#low-budgets").html(low);

    });

};


$(window).ready(function(){
    $("#button").on("click", function(){
         Films()
     });
});
