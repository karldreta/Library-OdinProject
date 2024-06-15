const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const books = document.querySelectorAll('.book');
books.forEach(book => book.addEventListener('click', displayBook));
const button = document.querySelector('#addBook');
button.addEventListener('click', addBookToLib);
const addBookForm = document.querySelector('.book-form-container');
const modals = document.querySelectorAll('dialog');
const closeModalButtons = document.querySelectorAll('.closeModal');
closeModalButtons.forEach(button => button.addEventListener('click', () => {
    document.querySelector('.modal').close();
}));


const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() { return `${this.title} by ${this.author} has ${this.pages} pages, ${this.isRead}.`;
    }
    // Add a finished reading date()

    myLibrary.push(this);
}

function displayBook() {
    // This will be a function for displaying the info of a book in a Modal.
}

function addBookToLib() {
    addBookForm.showModal();
}


modals.forEach(modal => {
    modal.addEventListener("click", e => {
      const dialogDimensions = modal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        modal.close();
      }
    });
  });