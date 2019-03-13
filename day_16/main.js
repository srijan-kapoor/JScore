// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

class myCat{
  constructor(name,tiredness,happiness,lonliness,hunger){
    this.name = name;
    this.tiredness = tiredness;
    this.happiness = happiness;
    this.lonliness = lonliness;
    this.hunger = hunger; 
  }
  tiredness(){
      return `${this.name} is ${this.tiredness--} percent tired.`    
  }
  happiness(){
    return `${this.name} is ${this.happiness++} percent happy.`
  }
  hungry(){
    return `${this.name} is ${this.hungry++} percent hungry.`
  }
  loneliness(){
    return `${this.name} is ${this.loneliness--} percent lonely.`
  } 
}


// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished

  class Booklist {
  constructor(numRead, numUnread,refNext, refCurrent,refLast, listArray){
        this.numRead = 0;
        this.numUnread = 0;
        this.refNext = {};
        this.refCurrent = {};
        this.refLast = {};
        this.listArray = [];
    }
  addBook(){
    return this.listArray.push(this.Title)
    }
  numRead(){
    if(ifRead) {
      return this.numRead++;
        }
    else
      return this.numUnread++;
    }
}
class Book extends Booklist{
    constructor(Title,Genre,Author,isRead,dateRead){
  super(Title,Genre,Author,isRead,dateRead);
        this.Title = Title;
        this.Genre = Genre;
        this.Author = Author;
        this.isRead = false;
        this.dateRead = new Date();
    }
  revise(ifRead){
  this.isRead = ifRead;
}
}
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books