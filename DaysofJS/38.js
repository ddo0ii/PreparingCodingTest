// class, constructor
/**
Objective
Today, we will extend what we learned yesterday about Inheritance to Abstract Classes. Because this is a very specific object oriented concept, submissions are limited to the few languages that use this construct. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given a Book class and a Solution class, write a MyBook class that does the following:

Inherits from Book
Has a parameterized constructor taking these  parameters:
string 
string 
int 
Implements the Book class' abstract display() method so it prints these  lines:
, a space, and then the current instance's .
, a space, and then the current instance's .
, a space, and then the current instance's .
Note: Because these classes are being written in the same file, you must not use an access modifier (e.g.: ) when declaring MyBook or your code will not execute.

Input Format

You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

Output Format

The  method should print and label the respective , , and  of the MyBook object's instance (with each value on its own line) like so:

Title: $title
Author: $author
Price: $price
Note: The  is prepended to variable names to indicate they are placeholders for variables.

Sample Input

The following input from stdin is handled by the locked stub code in your editor:

The Alchemist
Paulo Coelho
248
Sample Output

The following output is printed by your display() method:

Title: The Alchemist
Author: Paulo Coelho
Price: 248
 */
"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("\n"));
  main();
});
function readLine() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError(
        "Do not attempt to directly instantiate an abstract class."
      );
    } else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log("Implement the 'display' method!");
  }
}
class MyBook extends Book {
  // Declare your class here.
  /**
   *   Class Constructor
   *
   *   @param title The book's title.
   *   @param author The book's author.
   *   @param price The book's price.
   **/
  // Write your constructor here
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }
  /**
   *   Method Name: display
   *
   *   Print the title, author, and price in the specified format.
   **/
  // Write your method here
  display() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Price: " + this.price);
  }
  // End class
}

function main() {
  let title = readLine();
  let author = readLine();
  let price = +readLine();

  let book = new MyBook(title, author, price);
  book.display();
}
