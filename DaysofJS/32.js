// reverse함수 및 단순 어레이로 실행
/**
Objective
Today, we will learn about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

Example


Print 4 3 2 1. Each integer is separated by one space.

Input Format

The first line contains an integer,  (the size of our array).
The second line contains  space-separated integers that describe array 's elements.

Constraints

Constraints

, where  is the  integer in the array.
Output Format

Print the elements of array  in reverse order as a single line of space-separated numbers.

Sample Input

4
1 4 3 2
Sample Output

2 3 4 1
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  // sol 1
  console.log(arr.reverse().join(" "));

  // sol 2
  // const reverseN = (array) => {
  // let temp = null;
  //     let length = array.length;
  //     for (let i = 0; i < length / 2; i++){
  //         temp = array[i];
  //         array[i] = array[length - 1 - i];
  //         array[length - 1 - i] = temp;
  //     }
  //     return array;
  // }
  // console.log(reverseN(arr).join(' '));

  // sol 3
  // const reverseN = (array) => {
  // let temp = null;
  //     for (let i = 0; i < n / 2; i++){
  //         temp = array[i];
  //         array[i] = array[n - 1 - i];
  //         array[n - 1 - i] = temp;
  //     }
  //     return array;
  // }
  // console.log(reverseN(arr).join(' '));
}
