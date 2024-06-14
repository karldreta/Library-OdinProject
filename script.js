const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const books = document.querySelectorAll('.book');
books.forEach(book => book.addEventListener('click', displayBook));
const button = document.querySelector('#addBook');
button.addEventListener('click', addBookToLib);

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() { return `${this.title} by ${this.author} has ${this.pages} pages, ${this.isRead}.`;
    }
    myLibrary.push(this);
}

function displayBook() {

}

function addBookToLib() {

}