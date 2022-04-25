// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {

  const listOfDirectors = movies.map(movie => movie.director);
  return listOfDirectors;
}

const listDirectors = getAllDirectors(movies);
console.log(listDirectors);

// How could you "clean" a bit this array and make it unified (without duplicates)?
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
function howManyMovies(movies) {

  const listOfDramaBySpiel = movies.filter(movie => movie.director === 'Steven Spielberg' &&
  movie.genre.includes('Drama'));
  
  return listOfDramaBySpiel;

}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const totalScore = movies.reduce(function (sum, movie) {
                                         return sum + movie.score;
                                   }, 0);

  return +(totalScore / movies.length).toFixed(2);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const listOfAllDrama = movies.filter(movie => movie.genre.includes('Drama'));

  const totalDramaScore = listOfAllDrama.reduce(function (sum, movie) {
                                                    return sum + movie.score;
                                                }, 0);
  
  return +(totalDramaScore / listOfAllDrama.length).toFixed(2);

}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  //deep Copy due .sort() mutate the original array
  const moviesDeepCopy = JSON.parse(JSON.stringify(movies));

  moviesDeepCopy.sort((movieA, movieB) => movieA.year - movieB.year || 
                                          movieA.title.localeCompare(movieB.title)
                     );

  return moviesDeepCopy;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  //deep Copy due .sort() mutate the original array
  const moviesDeepCopy = JSON.parse(JSON.stringify(movies));

  moviesDeepCopy.sort((movieA, movieB) => {
    if (movieA.title < movieB.title) {
      return -1;
    }
    if (movieA.title > movieB.title) {
      return 1;
    }
    if (movieA.title === movieB.title) {
      return 0;
    }
  });

  const allTittle = moviesDeepCopy.map(movie => movie.title);

  //Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.
  if (allTittle.length < 20){
    return allTittle;
  }else{
    return allTittle.slice(0, 20);
  }

}

console.log(orderAlphabetically(movies));

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
