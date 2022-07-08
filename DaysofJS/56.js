/**
Objective
In the previous challenge, we calculated a mean. In this challenge, we practice calculating a weighted mean. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an array, , of  integers and an array, , representing the respective weights of 's elements, calculate and print the weighted mean of 's elements. Your answer should be rounded to a scale of  decimal place (i.e.,  format).

Example


The array of values . Their sum is . The sum of . The weighted mean is . Print  and return.

Function Description
Complete the weightedMean function in the editor below.

weightedMean has the following parameters:
- int X[N]: an array of values
- int W[N]: an array of weights

Prints
- float: the weighted mean to one decimal place

Input Format

The first line contains an integer, , the number of elements in arrays  and .
The second line contains  space-separated integers that descdribe the elements of array .
The third line contains  space-separated integers that descdribe the elements of array .

Constraints

, where  is the  element of array .
, where  is the  element of array .
Output Format

Print the weighted mean on a new line. Your answer should be rounded to a scale of  decimal place (i.e.,  format).

Sample Input

STDIN           Function
-----           --------
5               X[] and W[] size n = 5
10 40 30 50 20  X = [10, 40, 30, 50, 20]  
1 2 3 4 5       W = [1, 2, 3, 4, 5]
Sample Output

32.0
Explanation

We use the following formula to calculate the weighted mean:

And then print our result to a scale of  decimal place () on a new line.
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

/*
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
  // Write your code here
  let zResult = new Array();
  let mSum = 0;
  let wSum = 0;
  for (let i = 0; i < X.length; i++) {
    zResult[i] = X[i] * W[i];
  }

  for (let k = 0; k < W.length; k++) {
    mSum = mSum + zResult[k];
  }

  for (let j = 0; j < W.length; j++) {
    wSum = wSum + W[j];
  }
  console.log(parseFloat(mSum / wSum).toFixed(1));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valsTemp) => parseInt(valsTemp, 10));

  const weights = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((weightsTemp) => parseInt(weightsTemp, 10));

  weightedMean(vals, weights);
}
