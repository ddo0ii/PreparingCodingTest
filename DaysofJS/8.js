// Day 1: let and const

/**
Objective

In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

Task

Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, r, denoting the radius of a circle from stdin.
Use PI and r to calculate the area and perimeter of a circle having radius r.
Print area as the first line of output and print perimeter as the second line of output.
Input Format

A single integer, r, denoting the radius of a circle.

Constraints
0 <= r <= 100
r is a floating-point number scaled to at most 3 decimal places.
Output Format

Print the following two lines:

On the first line, print the area of the circle having radius r.
On the second line, print the perimeter of the circle having radius r.

Sample Input 0
2.6

Sample Output 0
21.237166338267002
16.336281798666924

Explanation 0

Given the radius r=2.6, we calculate the following:
area = pi * r^2
perimeter = 2 * pi * r

We then print area as our first line of output and perimeter as our second line of output.
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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    const PI = Math.PI;
    
    // Print the area of the circle:
    console.log(PI * r * r);
    // Print the perimeter of the circle:
    console.log(PI * 2 * r)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}