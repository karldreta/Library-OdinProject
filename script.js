const body = document.querySelector('body');
const bookshelf = document.querySelector('#bookshelf');
const topShelf = document.querySelector('#bookshelf .top-books');
const bottomShelf = document.querySelector('#bookshelf .bottom-books');

const bookInfo = document.querySelector('#bookInfo');
const bookTitleInfo = document.querySelector('.bookTitleInfo p');
const bookAuthorInfo = document.querySelector('.bookAuthorInfo p');
const bookPageCountInfo = document.querySelector('.bookPageCountInfo p');
const bookReadStatusInfo = document.querySelector('.bookReadStatusInfo p')
const books = document.querySelectorAll('.book');
books.forEach(book => book.addEventListener('click', displayBook));


const button = document.querySelector('#addBook').addEventListener('click', openForm);
const addBookDialog = document.querySelector('.book-form-container');
const dialogs = document.querySelectorAll('dialog');

const toggleReadStatus = document.querySelector('#default');

const form = document.querySelector('#addBookForm');

// Below: To constrain the storage, if we then decide to remove a book, we can just topShelfSpace-- / bottomShelfSpace--, in theory this will work since we'll just move down to negative numbers.
  let topShelfSpace = 0;
  let bottomShelfSpace = 0;

  form.addEventListener("submit", e => {
    e.preventDefault(); // Prevent the form from submitting normally
    
    // Collect input values
    const bookTitle = document.querySelector('#bookTitle');
    const bookTitleValue = bookTitle.value;
    const bookAuthor = document.querySelector('#bookAuthor');
    const bookAuthorValue = bookAuthor.value;
    const bookPages = document.querySelector('#bookPages');
    const bookPagesValue = bookPages.value;
  
    // First, Validate Inputs
    if (validateInputs(bookTitle, bookAuthor, bookPages)) {
      // Check shelf space and add book accordingly
      if (toggleReadStatus.checked && topShelfSpace < 4) {
        addBookToLib(bookTitleValue, bookAuthorValue, bookPagesValue, "Read");
        // addBookToShelf(bookTitleValue, bookAuthorValue, "Read", bookPagesValue);
        topShelfSpace++;
        addBookDialog.close();
      } else if (!toggleReadStatus.checked && bottomShelfSpace < 6) {
        addBookToLib(bookTitleValue, bookAuthorValue, bookPagesValue, "Unread");
        bottomShelfSpace++;

        // Close the addBook Modal
        addBookDialog.close();
      } else {
        storageAlert()
      }
    }
  });

// Input validation function
function validateInputs(bookTitle, bookAuthor, bookPages) {
  let isValid = true;

  if (bookTitle.value === "") {
    displayError(bookTitle, "Required");
    isValid = false;
  } else if (bookTitle.value.length > 30) {
    displayError(bookTitle, "Invalid Book Title");
    isValid = false;
  } else {
    displaySuccess(bookTitle);
  }

  if (bookAuthor.value === "") {
    displayError(bookAuthor, "Required");
    isValid = false;
  } else {
    displaySuccess(bookAuthor);
  }

  if (bookPages.value === "") {
    displayError(bookPages, "Required");
    isValid = false;
  } else if (isNaN(bookPages.value)) {
    displayError(bookPages, "Must be a number");
    isValid = false;
  } else {
    displaySuccess(bookPages);
  }

  return isValid;
}

function displayError(element, message) {
  const inputContainer = element.parentElement;
  const showEffect = inputContainer.querySelector('.showEffect');
  showEffect.textContent = `*${message}`;
}

function displaySuccess(element) {
  const inputContainer = element.parentElement;
  const showEffect = inputContainer.querySelector('.showEffect');
  showEffect.textContent = "";
}

// The library Array

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLib(title, author, pageCount, readStatus) {
  const newBook = new Book(title, author, pageCount, readStatus);
  myLibrary.push(newBook); // Add the new book to the array
  const bookIndex = myLibrary.indexOf(newBook); // Get the index of the new book

  // Call the function to add book to shelf and pass the index as well
  addBookToShelf(title, author, readStatus, pageCount, bookIndex);
}

// The Books
addBookToLib("The Republic", "Plato", 480, "Read");
addBookToLib("1984", "George Orwell", 328, "Read");
addBookToLib("Animal Farm", "George Orwell", 92, "Read");
addBookToLib("Brave New World", "Aldous Huxley", 311, "Read");
addBookToLib("The Prince", "Niccolò Machiavelli", 164, "Unread");
addBookToLib("The Lessons of History", "Will & Ariel Durant", 123, "Read");
addBookToLib("Gödel, Escher, Bach", "Douglas Hofstadter", 777, "Unread");
addBookToLib("Hamlet", "William Shakespeare", 104, "Read");
addBookToLib("Lord of the Flies", "William Golding", 315, "Unread");
addBookToLib("Fahrenheit 451", "Ray Bradbury", 256, "Unread");
addBookToLib("Thus Spoke Zarathustra", "Friedrich Nietzsche", 400, "Read");
addBookToLib("Gulliver's Travels", "Jonathan Swift", 336, "Read");
addBookToLib("The Book of Five Rings", "Musashi Miyamoto", 80, "Unread")
addBookToLib("The Red Book", "Carl Jung", 416 , "Unread")

// Render a book to the DOM
function addBookToShelf(bookTitle, bookAuthor, bookReadStatus, bookPageCount, bookIndex) {

  //Create the DOM Elements
  const bookDiv = document.createElement("div");
  bookDiv.classList.add('book');
  bookDiv.dataset.pageCount = bookPageCount;
  bookDiv.dataset.bookReadStatus = bookReadStatus;
  bookDiv.dataset.bookIndex = bookIndex;

  // Create the spine-title div
  const spineTitleDiv = document.createElement("div");
  spineTitleDiv.classList.add('spine-title');
  const titleP = document.createElement("p");
  titleP.textContent = bookTitle;
  spineTitleDiv.appendChild(titleP);

  // Create the spine-author div
  const spineAuthorDiv = document.createElement("div");
  spineAuthorDiv.classList.add('spine-author');
  const authorP = document.createElement("p");
  authorP.textContent = bookAuthor;
  spineAuthorDiv.appendChild(authorP);

  // Append to the main book div
  bookDiv.appendChild(spineTitleDiv);
  bookDiv.appendChild(spineAuthorDiv);

  if (bookReadStatus == "Read") {
    topShelf.appendChild(bookDiv);
  } else {
    bottomShelf.insertBefore(bookDiv, bottomShelf.firstChild);
  };

  bookDiv.addEventListener('click', displayBook);
}

// Opens a modal for displaying the info of a book (front cover POV).
function displayBook() {

    // Get the book reference
    const bookTitle = this.querySelector(".spine-title p").textContent;
    const bookAuthor = this.querySelector(".spine-author p").textContent;
    const bookPageCount = this.dataset.pageCount;
    const bookReadStatus = this.dataset.bookReadStatus;
    // Get the index of the book below
    const index = this.dataset.bookIndex;

    console.log(index);

     // Book Spine references are scoped globally, see bookTitleInfo and bookAuthorInfo above.
    
    // Then, dynamically change the info based on the clicked div ("this").
    bookTitleInfo.textContent = bookTitle;
    bookAuthorInfo.textContent = bookAuthor;
    bookPageCountInfo.textContent = `${bookPageCount} Pages`;
    bookReadStatusInfo.textContent = bookReadStatus;

    // Call the modal
    bookInfo.showModal();
}

function openForm() {
    addBookDialog.showModal();
}

function storageAlert() {
  const alertModal = document.querySelector('.storageAlert');
  alertModal.showModal();
}

// Below: Function for closing when clicking the backdrop and button of the modal.

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