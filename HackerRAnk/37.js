// class constructor
/**
Objective
Today, we're delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video.

Task
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

A Student class constructor, which has  parameters:
A string, .
A string, .
An integer, .
An integer array (or vector) of test scores, .
A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
Grading.png

Input Format

The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

The first line contains , , and , separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes .

Constraints

Output Format

Output is handled by the locked stub code. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

Sample Input

Heraldo Memelli 8135627
2
100 80
Sample Output

 Name: Memelli, Heraldo
 ID: 8135627
 Grade: O
Explanation

This student had  scores to average:  and . The student's average grade is . An average grade of  corresponds to the letter grade , so the calculate() method should return the character'O'.
 */
"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let sum = this.scores.reduce((acc, num) => {
      acc += num;
      return acc;
    });
    let avg = sum / this.scores.length;

    if (avg >= 90) {
      return "O";
    } else if (avg >= 80) {
      return "E";
    } else if (avg >= 70) {
      return "A";
    } else if (avg >= 55) {
      return "P";
    } else if (avg >= 40) {
      return "D";
    } else {
      return "T";
    }
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
