const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const books = document.querySelectorAll('.book');
books.forEach(book => book.addEventListener('click', displayBook));


const button = document.querySelector('#addBook');
button.addEventListener('click', openForm);


const addBookDialog = document.querySelector('.book-form-container');
const dialogs = document.querySelectorAll('dialog');
const submitBookBtn  = document.querySelector('#bookSubmit')
const form = document.querySelector('#addBookForm');
form.addEventListener("submit", e => {
  e.preventDefault();
  // Need to validate first, but we'll do that later.

  // Create New Book
});


const closeModalButtons = document.querySelectorAll('.closeModal');
closeModalButtons.forEach(button => button.addEventListener('click', () => {
    const modal = button.closest('.modal');
        if (modal) {
            modal.close(); // Close the modal associated with this close button, ie the most recent opened modal.
        }
}));


// For displaying each book info
const bookInfo = document.querySelector('#bookInfo');
const showBookInfo = document.querySelectorAll('.book');
showBookInfo.forEach(book => book.addEventListener('click', displayBook))


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
    // A function for displaying the info of a book in a Modal.

    // Get the references of the books
    const bookTitleInfo = document.querySelector('.bookTitleInfo p');
    const bookAuthorInfo = document.querySelector('.bookAuthorInfo p');
    const bookPageCountInfo = document.querySelector('.bookPageCountInfo p');
    const bookReadStatusInfo = document.querySelector('.bookReadStatusInfo p');

    // Now, get the book itself

    const bookTitle = this.querySelector(".spine-title p").textContent;
    const bookAuthor = this.querySelector(".spine-author p").textContent;

    // Then, dynamically change the info based on the clicked div ("this").

    bookTitleInfo.textContent = bookTitle;
    bookAuthorInfo.textContent = bookAuthor;


    // Call the modal
    bookInfo.showModal();
}

function openForm() {
    addBookDialog.showModal();
}


function addBookToLib() {

}

// Start Function for when clicking the backdrop of a modal

dialogs.forEach(dialog => {
    dialog.addEventListener("click", e => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  });