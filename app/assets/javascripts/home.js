function Films () {;
  $.getJSON("/movies.json").then(function(movies){;
    var low = _.filter(movies, function (movie){;
      return movie.budget <= 80;
    });
  });
  $("#low-budgets").html(low);
};


$(window).ready(function(){
  $("#button").on("click", Films);
});
