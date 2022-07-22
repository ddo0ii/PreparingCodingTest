// 팩토리얼
// Day 1: Functions
/*
Objective
Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.
Task
Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).
Input Format
Locked stub code in the editor reads a single integer, n, from stdin and passes it to a function named factorial.
Constraints
 <= n <= 10
Output Format
The function must return the value of n!.
Sample Input 0
4
Sample Output 0
24
Explanation 0
We return the value of 4! = 4*3*2*1 = 24.
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

