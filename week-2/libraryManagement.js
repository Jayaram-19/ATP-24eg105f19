// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)



//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class Book{
title;
author;
pages;
isAvailable=true;

constructor(title,author,pages){
this.title=title;
this.author=author;
this.pages=pages;
}
//       borrow() - Marks the book as not available
borrow(){
return this.isAvailable=false;
}
//       returnBook() - Marks the book as available
returnBook(){
return this.isAvailable=true;
}
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
getInfo(){
return `The ${this.title} by ${this.author} (${this.pages})`;
}

//       isLongBook() - Returns true if pages > 300, false otherwise
isLongBook(){
return this.pages>300
}
}
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let Book1=new Book("Harry Potter","Vamshi",310)
let Book2=new Book("1984","krishna",298)
let Book3=new Book("The Hobbit","ram",320)
let Book4=new Book("To kill a Mocking bird","Harper lee",1960)
let Book5=new Book("Animal Farm","mani",1991)

let Books=[Book1,Book2,Book3,Book4,Book5]
console.log(Books)

Book1.borrow();
Book2.borrow();

console.log(`The  Book availability status is ${Book1.isAvailable}`)
console.log(Book2.isAvailable)

Book1.returnBook();
console.log(`The  Book availability status is ${Book1.isAvailable}`)

//       iv. Count how many books are "long books" (more than 300 pages)
let count=Books.filter((book)=>book.isLongBook()).length
console.log(count)

//       v. List all available books
let availableBooks=Books.filter(book=>book.isAvailable===true)
console.log(availableBooks)