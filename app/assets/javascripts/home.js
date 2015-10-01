function Films () {;
    $.getJSON("/movies.json").then(function(jsonData){  //  <------
       jsonData.titles
                 //  <——— jsonData top-level is an object with an array
                 //on the ‘movies’ key
       var low = _.filter(titles, function(movie){;
         return movie.budget <= 80;
       });
    // var bestMovies = _.filter(movies,)
      $("#low-budgets").html(42);
    });

};


$(window).ready(function(){
    $("#button").on("click", function(){
         Films()
     });
});
