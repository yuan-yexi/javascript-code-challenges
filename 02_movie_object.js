// Function implementation

// Creating a Movie blueprint
// function Movie(title, director, genre, releaseYear, rating) {
//     this.title = title
//     this.director = director
//     this.genre = genre
//     this.releaseYear = releaseYear
//     this.rating = rating
// }

// // Adding a function to the Movie prototype
// Movie.prototype.getOverview = function() {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
// }

class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title
        this.director = director
        this.genre = genre
        this.releaseYear = releaseYear
        this.rating = rating
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
    }
}

const Spiderman = new Movie(
    'Spiderman', 
    'Sam Raimi', 
    'Action', 
    2002, 
    87
)

const Batman = new Movie(
    "The Dark Knight",
    "Christopher Nolan",
    "Action",
    2008,
    83
)

// This logs the prototype values
console.log(Spiderman)
// This logs the nice string sentence using getOverview function
console.log(Spiderman.getOverview())