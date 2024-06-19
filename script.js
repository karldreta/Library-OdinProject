const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const topShelf = document.querySelector('#bookshelf .top-books');
const bottomShelf = document.querySelector('#bookshelf .bottom-books');

const bookInfo = document.querySelector('#bookInfo');
const bookTitleInfo = document.querySelector('.bookTitleInfo p');
const bookAuthorInfo = document.querySelector('.bookAuthorInfo p');

const books = document.querySelectorAll('.book');

// For displaying each book info
books.forEach(book => book.addEventListener('click', displayBook));


const button = document.querySelector('#addBook').addEventListener('click', openForm);
const addBookDialog = document.querySelector('.book-form-container');
const dialogs = document.querySelectorAll('dialog');
const submitBookBtn  = document.querySelector('#bookSubmit');

const form = document.querySelector('#addBookForm');
form.addEventListener("submit", e => {
  e.preventDefault(); 
  // Need to validate first, but we'll do that later.

  // Create New Book
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() { return `${this.title} by ${this.author} has ${this.pages} pages, ${this.isRead}.`;
    }
    // Push to the array
    myLibrary.push(this);
}

// The Books

const book0 = new Book(
  "The Republic",
  "Plato",
  480,
  "Read",
)

const book1 = new Book(
  "1984",
  "George Orwell",
  328,
  "Read",
)

const book2 = new Book(
  "Animal Farm",
  "George Orwell",
  92,
  "Read",
)

const book3 = new Book(
  "Brave New World",
  "Aldous Huxley",
  311,
  "Read",
)

const book4 = new Book(
  "The Lessons of History",
  "Will & Ariel Durant",
  123,
  "Read",
)

const book5 = new Book(
  "Hamlet",
  "William Shakespeare",
  104,
  "Read",
)

const book6 = new Book(
  "Gödel, Escher, Bach",
  "Douglas Hofstadter",
  777,
  "Unread",
)

const book7 = new Book(
  "Lord of the Flies",
  "William Golding",
  315,
  "Unread",
)


// Render to the DOM
function addBookToShelf() {
  //Create the DOM Elements
  
  const bookDiv = document.createElement("div");
  bookDiv.classList.add('book');


  // Create the spine-title div
  const spineTitleDiv = document.createElement("div");
  spineTitleDiv.classList.add('spine-title');
  const titleP = document.createElement("p");
  titleP.textContent = myLibrary[1].title;
  spineTitleDiv.appendChild(titleP);

  // Create the spine-author div
  const spineAuthorDiv = document.createElement("div");
  spineAuthorDiv.classList.add('spine-author');
  const authorP = document.createElement("p");
  authorP.textContent = myLibrary[1].author;
  spineAuthorDiv.appendChild(authorP);

  // Append to the main book div
  bookDiv.appendChild(spineTitleDiv);
  bookDiv.appendChild(spineAuthorDiv);
  topShelf.appendChild(bookDiv);
  bookDiv.addEventListener('click', displayBook);

}

// addBookToShelf();

function displayBook() {
    // A function for displaying the info of a book in a Modal.
    
    // Get the book reference
    const bookTitle = this.querySelector(".spine-title p").textContent;
    const bookAuthor = this.querySelector(".spine-author p").textContent;

     // Book Spine references are scoped globally, see bookTitleInfo and bookAuthorInfo above.
    
    // Then, dynamically change the info based on the clicked div ("this").
    bookTitleInfo.textContent = bookTitle;
    bookAuthorInfo.textContent = bookAuthor;
  
    const bookInfo = document.querySelector('#bookInfo');
    // Call the modal
    bookInfo.showModal();
}

function openForm() {
    addBookDialog.showModal();
}


// Function for closing when clicking the backdrop and button of the modal.

const closeModalButtons = document.querySelectorAll('.closeModal');
closeModalButtons.forEach(button => button.addEventListener('click', () => {
    const modal = button.closest('.modal');
        if (modal) {
            modal.close(); // Close the modal associated with this close button, ie the most recent opened modal.
        }
}));

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