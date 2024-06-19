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

// For displaying each book info
books.forEach(book => book.addEventListener('click', displayBook));


const button = document.querySelector('#addBook').addEventListener('click', openForm);
const addBookDialog = document.querySelector('.book-form-container');
const dialogs = document.querySelectorAll('dialog');


// const submitBookBtn  = document.querySelector('#bookSubmit');

const toggleReadStatus = document.querySelector('#default');
// toggleReadStatus.addEventListener('click', () => {
//   const label = document.querySelector('label[for="default"]');

//     if (toggleReadStatus.checked) {
//       return label.dataset.checked
//     } else {
//       return label.dataset.unchecked
//     }
//   }
// );


const form = document.querySelector('#addBookForm');
form.addEventListener("submit", e => {
  e.preventDefault(); 
  // Need to validate first, but we'll do that later.
  validateInputs();


  console.log(toggleReadStatus.checked);
  // Create New Book
});

// Below: Input Validation

function validateInputs() {
  const bookTitle = document.querySelector('#bookTitle')
  const bookTitleValue = bookTitle.value;
  const bookAuthor = document.querySelector('#bookAuthor');
  const bookAuthorValue = bookAuthor.value;
  const bookPages = document.querySelector('#bookPages');
  const bookPagesValue = bookPages.value;
  
  if (bookTitleValue === "") {
      displayError(bookTitle, "Required");
  } else if ((bookTitleValue.length > 30)){
    displayError(bookTitle, "Invalid Book Title");
  } else {
      displaySuccess(bookTitle);
  };


  if (bookAuthorValue === "") {
    displayError(bookAuthor, "Required");
  } else {
      displaySuccess(bookAuthor);
  };


   if (bookPagesValue === "") {
        displayError(bookPages, "Required");
    } else if (isNaN(bookPagesValue)) {
        displayError(bookPages, "Must be a number");
    } else {
        displaySuccess(bookPages);
    }

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
addBookToLib("Thus Spoke Zarathustra", "Friedrich Nietzsche", 400, "Unread");
addBookToLib("Gulliver's Travels", "Jonathan Swift", 336, "Read");


// Looping and adding books to shelf

function loopBookProp() {
  for (let i = 0; i < myLibrary.length; i++) {
    const bookTitle = myLibrary[i].title;
    const bookAuthor = myLibrary[i].author;
    const bookPageCount = myLibrary[i].pages;
    const bookReadStatus = myLibrary[i].isRead;
    
    // Pass the parameters to the 
    addBookToShelf(bookTitle, bookAuthor, bookReadStatus, bookPageCount);
  }
}

loopBookProp();

// Render a book to the DOM
function addBookToShelf(bookTitle, bookAuthor, bookReadStatus, bookPageCount) {
  //Create the DOM Elements
  
  const bookDiv = document.createElement("div");
  bookDiv.classList.add('book');
  bookDiv.dataset.pageCount = bookPageCount;
  bookDiv.dataset.bookReadStatus = bookReadStatus;
  

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

function displayBook() {
    // A Modal function for displaying the info of a book (front cover POV).

    // Get the book reference
    const bookTitle = this.querySelector(".spine-title p").textContent;
    const bookAuthor = this.querySelector(".spine-author p").textContent;
    const bookPageCount = this.dataset.pageCount;
    const bookReadStatus = this.dataset.bookReadStatus;

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