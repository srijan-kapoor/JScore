// Book class: represent a book
class Book{
  constructor(title, author,isbn){
    this.title = title;
    this.author = author;
    this.isbn =isbn;
  }
}

// static methods can be called directly without having to instantiate them

// UI class: handle UI tasks
class UI {
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(book => UI.addBookToList(book))
  }
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
      const row = document.createElement('tr');

      row.innerHTML= `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="red lighten-4 delete">X</a></td>
      `;

      list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove()
    }
  }
  
  // alert 
  static showAlert(message, className){
    const div = document.createElement('div');
    div.className=`darken-2 ${className}`;
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form)
    // make alert disappear
    setTimeout(() => document.querySelector('.darken-2').remove(), 3000)
  }

  static clearFields(){
    document.querySelector('#title').value= ''
    document.querySelector('#author').value= ''
    document.querySelector('#isbn').value= ''
  }
}

// Store class: handle storage
class Store{
  static getBooks(){  
    let books;
    if(localStorage.getItem('books') === null){
       books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book)
    localStorage.setItem('books', JSON.stringify(book))
  }

  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1)
      }
    })
    localStorage.setItem(books, JSON.stringify(books))
  }
}

// events: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

  e.preventDefault()
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value

  // validations
  if(title==="" || author=== "" || isbn===""){
    UI.showAlert('Please do not leave fields empty', 'red')
  }
  else{
    // Instaniate a book from class Book
    const book = new Book(title, author, isbn)
    // Add book to UI
    UI.addBookToList(book)
    // add book to store
    Store.addBook(book);
    // Clear input fields
    UI.showAlert('Book successfully added', 'blue')
    UI.clearFields()

  }

})
// event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  UI.showAlert('Book deleted', 'teal')
})