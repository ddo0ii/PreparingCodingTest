// bitwise operations
/**
Objective
Welcome to the last day! Today, we're discussing bitwise operations. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given set . Find two integers,  and  (where ), from set  such that the value of  is the maximum possible and also less than a given integer, . In this case,  represents the bitwise AND operator.

Function Description
Complete the bitwiseAnd function in the editor below.

bitwiseAnd has the following paramter(s):
- int N: the maximum integer to consider
- int K: the limit of the result, inclusive

Returns
- int: the maximum value of  within the limit.

Input Format

The first line contains an integer, , the number of test cases.
Each of the  subsequent lines defines a test case as  space-separated integers,  and , respectively.

Constraints

Sample Input

STDIN   Function
-----   --------
3       T = 3
5 2     N = 5, K = 2
8 5     N = 8, K = 5
2 2     N = 8, K = 5
Sample Output

1
4
0
Explanation

 

All possible values of  and  are:

The maximum possible value of  that is also  is , so we print  on a new line.
 */
"use strict";

const fs = require("fs");

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
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N, K) {
    // Write your code here
    let maximum = 0;
    for (let i = 1; i <= N; i++){
        for (let j = 1; j < i; j++){
            let bitOp = i & j;
            if ((maximum < bitOp) && (bitOp < K)) {
                maximum = bitOp;
            }
        }
    }
    return maximum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const count = parseInt(firstMultipleInput[0], 10);

    const lim = parseInt(firstMultipleInput[1], 10);

    const res = bitwiseAnd(count, lim);

    ws.write(res + "\n");
  }

  ws.end();
}
