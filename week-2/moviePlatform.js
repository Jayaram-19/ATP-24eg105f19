
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// Tasks:
//     1. filter() only "Sci-Fi" movies
let genreFiltering=movies.filter(movie=>movie.genre==="Sci-Fi")
console.log("Sci-Fi Movies are",genreFiltering)
//     2. map() to return:
//             "Inception (8.8)"
let ratingOfMovie=movies.map(movie=>movie.title+"("+movie.rating+")",0)
console.log("Movies and ratings are",ratingOfMovie)
//    3. reduce() to find average movie rating
const averageRating=movies.reduce((total,movie)=>total+movie.rating,0)/movies.length;
console.log("Average Rating:",averageRating);
//     4. find() movie "Joker"
let findingMovie=movies.find(movie=>movie.title==="Joker")
console.log("Joker movie details are",findingMovie)
//     5. findIndex() of "Avengers"
let findingIndex=movies.findIndex(movie=>movie.title==="Avengers")
console.log("Index of Avengers movie is",findingIndex)