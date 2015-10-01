function Films () {;
  $.getJSON("/movies.json").then(function(jsonData){

    var movies = jsonData.movies

    // for low budget movies
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
      var pTag = "<li>" + movie + "</li>";
      $("#low-budgets").append(pTag);
    });

    var leos = movies.filter(function(movie){;
        return _.contains(movie.stars, 'Leonardo DiCaprio');
    });

    var leoTitles = leos.map(function(movie){
      return movie.title;
    })

    console.log(leoTitles)

    leoTitles.forEach(function(movie){
      var pTag = "<li>" + movie + "</li>";
      $("#Leos").append(pTag);
    });

  });

};


$(window).ready(function(){
    $("#button").on("click", function(){
         Films()
     });
});
