// Using inheritance from Book class

// Class implementation of Book Class
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.numCopies = numCopies
    }

    availability() {
        if (this.numCopies === 0) {
            return "Out of stock"
        } else if (this.numCopies < 10) {
            return "Low in stock"
        }
        return "In stock"
    }

    sell(numCopiesSold) {
        this.numCopies -=numCopiesSold
    }

    restock(numCopiesStocked) {
        this.numCopies += numCopiesStocked
    }
}

// javascript uses extend keyword to inherit from another class
class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies)
        this.edition = edition
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking the Coding Interview",
    "Gayle Laackman McDowell",
    1209123,
    7,
    "2.3"
)

console.log(CrackingTheCodingInterview.availability())
console.log(CrackingTheCodingInterview.getEdition())