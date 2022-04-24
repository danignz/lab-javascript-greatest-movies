// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const listOfDirectors = movies.map(movie => movie.director);
  return listOfDirectors;
}

const listDirectors = getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function uniquifyDirectors(listDirectors) {

  const arrayWordsUnique = [];
  listDirectors.forEach(function (director) {

    if (listDirectors.indexOf(director) === listDirectors.lastIndexOf(director)) { //words uniques
      arrayWordsUnique.push(director);
    }else if (arrayWordsUnique.indexOf(director) === -1){   //repeated words, check if it has not been inserted yet
      arrayWordsUnique.push(director);
    }

  });

  return arrayWordsUnique;
}

console.log(uniquifyDirectors(listDirectors));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
