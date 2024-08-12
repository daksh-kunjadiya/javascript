class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    get author() {
        return this.#author;
    }
    set author(value) {
        this.#author = value;
    }
    get price() {
        return this.#price;
    }
    set price(value) {
        this.#price = value;
    }
    get rentalPrice() {
        return this.#rentalPrice;
    }
    set rentalPrice(value) {
        this.#rentalPrice = value;
    }
    get copiesAvailable() {
        return this.#copiesAvailable;
    }
    set copiesAvailable(value) {
        this.#copiesAvailable = value;
    }

    buyBook(book) {
        if (this.#copiesAvailable > book) {
            this.#copiesAvailable -= book;
            return `Book purchased. Remaining copies: ${this.#copiesAvailable}`;
        } else {
            return "Sorry, the book is out of stock.";
        }
    }
    rentBook(book) {
        if (this.#copiesAvailable > book) {
            this.#copiesAvailable -= book;
            return `Book rented. Remaining copies: ${this.#copiesAvailable}`;
        } else {
            return "Sorry, the book is out of stock.";
        }
    }
    returnBook(book) {
        this.#copiesAvailable += book;
        return `Book returned. Available copies: ${this.#copiesAvailable}`;
    }

    checkAvailability() {
        return `Copies available: ${this.#copiesAvailable}`;
    }
}

let book1 = new Book("JavaScript", "Joe trribiani", 50,50,50);

console.log(book1.buyBook(35));
console.log(book1.rentBook(10));
console.log(book1.returnBook(25));