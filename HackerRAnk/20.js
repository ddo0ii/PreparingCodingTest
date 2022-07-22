// arrow functions
/**
Objective

In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

Task

Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by .
If the element is odd, multiply the element by .
The function must then return the modified array.

Input Format

The first line contains an integer, , denoting the size of .
The second line contains  space-separated integers describing the respective elements of .

Constraints

, where  is the  element of .
Output Format

Return the modified array where every even element is doubled and every odd element is tripled.

Sample Input 0

5
1 2 3 4 5
Sample Output 0

3 4 9 8 15
Explanation 0

Given , we modify each element so that all even elements are multiplied by  and all odd elements are multipled by . In other words, . We then return the modified array as our answer.
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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  // method1
  // for(let i=0; i<nums.length; i++) {
  //     if(nums[i]%2==1){
  //         nums[i] *= 3;
  //     } else {
  //         nums[i] *= 2;
  //     }
  // }
  // return nums;

  // method2
  // let something = function(n) {
  //     if (n%2==0)
  //         return n*2;
  //     else
  //         return n*3;
  // }
  // let newArray = nums.map(something);
  // return newArray;

  // method3
  // let something = function(n) {
  //     let a = (n%2==0) ? n*2 : n*3;
  //     return a;
  // }
  // let newArray = nums.map(something);
  // return newArray;

  // method4
  // let something = n => n = (n%2==0) ? n*2 : n*3;
  // let newArray = nums.map(something);
  // return newArray;

  // method5
  // let newArray = nums.map(n => n = (n%2==0) ? n*2 : n*3);
  // return newArray;

  // method6
  return nums.map((n) => (n = n % 2 == 0 ? n * 2 : n * 3));
}

function main() {
  const n = +readLine();
  const a = readLine().split(" ").map(Number);

  console.log(modifyArray(a).toString().split(",").join(" "));
}