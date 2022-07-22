// java 함수 this사용해서 들고오기

/**
Objective

In this challenge, we practice creating objects. Check out the attached tutorial for more details.

Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

: This value is equal to .
: This value is equal to .
: This value is equal to 
: This value is equal to 
Note: The names of the object's properties must be spelled correctly to pass this challenge.

Input Format

The first line contains an integer denoting .
The second line contains an integer denoting .

Constraints

Output Format

Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

Sample Input 0

4
5
Sample Output 0

4
5
18
20
Explanation 0

Given a  of  and a  of , the Rectangle object's  is  and its  is .
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = a + a + b + b;
    this.area = a * b;
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}