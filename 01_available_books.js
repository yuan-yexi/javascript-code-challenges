// Inventory application for boo store
/* 
Book class with:
1. Title
2. Author
3. ISBN
4. numCopies
*/


// Function implementation
// function Book(title, author, ISBN, numCopies) {
//     this.title = title
//     this.author = author
//     this.ISBN = ISBN
//     this.numCopies = numCopies
// }

// // Using prototype to add properties to the Book function
// Book.prototype.getAvailability = function() {
//     if (this.numCopies === 0) {
//         return "Out of stock"
//     } else if (this.numCopies < 10) {
//         return "Low stock"
//     }
//     return "In stock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked
// }

// Class implementation
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.numCopies = numCopies
    }

    getAvailability() {
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

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 12329, 5)
console.log(HungerGames.getAvailability())
HungerGames.restock(12)
console.log(HungerGames.getAvailability())
HungerGames.sell(17)
console.log(HungerGames.getAvailability())