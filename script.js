const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const books = document.querySelectorAll('.book');
books.forEach(book => book.addEventListener('click', displayBook));
const button = document.querySelector('#addBook');
button.addEventListener('click', addBookToLib);
const addBookForm = document.querySelector('.book-form-container');
const dialogs = document.querySelectorAll('dialog');
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
    // Add a finished reading date()

    myLibrary.push(this);
}

function displayBook() {
    // A function for displaying the info of a book in a Modal.
    bookInfo.showModal()
}

function addBookToLib() {
     // A function to bring up the form.
    addBookForm.showModal();
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