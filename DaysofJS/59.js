/**
Objective
In this challenge, we practice calculating the interquartile range. We recommend you complete the Quartiles challenge before attempting this problem.

Task
The interquartile range of an array is the difference between its first () and third () quartiles (i.e., ).

Given an array, , of  integers and an array, , representing the respective frequencies of 's elements, construct a data set, , where each  occurs at frequency . Then calculate and print 's interquartile range, rounded to a scale of  decimal place (i.e.,  format).

Tip: Be careful to not use integer division when averaging the middle two elements for a data set with an even number of elements, and be sure to not include the median in your upper and lower data sets.

Example


Apply the frequencies to the values to get the expanded array . Here . The median of the left half, , the middle element. For the right half, . Print the difference to one decimal place: , so print .

Function Description

Complete the interQuartile function in the editor below.

interQuartile has the following parameters:
- int values[n]: an array of integers
- int freqs[n]:  occurs  times in the array to analyze

Prints

float: the interquartile range to 1 place after the decimal
Input Format

The first line contains an integer, , the number of elements in arrays  and .
The second line contains  space-separated integers describing the elements of array .
The third line contains  space-separated integers describing the elements of array .

Constraints

The number of elements in  is equal to .
Output Format

Print the interquartile range for the expanded data set on a new line. Round the answer to a scale of  decimal place (i.e.,  format).

Sample Input

STDIN           Function
-----           --------
6               arrays size n = 6
6 12 8 10 20 16 values = [6, 12, 8, 10, 20, 16]
5 4 3 2 1 5     freqs = [5, 4, 3, 2, 1, 5]
Sample Output

9.0
Explanation

The given data is:

InterquartileRange

First, we create data set  containing the data from set  at the respective frequencies specified by :

As there are an even number of data points in the original ordered data set, we will split this data set exactly in half:

Lower half (L): 6, 6, 6, 6, 6, 8, 8, 8, 10, 10

Upper half (U): 12, 12, 12, 12, 16, 16, 16, 16, 16, 20

Next, we find . There are  elements in  half, so  is the average of the middle two elements:  and . Thus, .

Next, we find .There are  elements in  half, so  is the average of the middle two elements:  and . Thus, .

From this, we calculate the interquartile range as  and print  as our answer.
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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function interQuartile(n, values, freqs) {
  // Print your answer to 1 decimal place within this function
  let data = [];
  let L, U, Q1, Q3, IQR;

  values.forEach(function (val, i) {
    for (let z = 0; z < freqs[i]; z++) {
      data.push(val);
    }
  });
  data.sort(function (a, b) {
    return a - b;
  });

  L = data.slice(0, data.length / 2);
  U = data.slice(Math.round(data.length / 2));

  Q1 = getMedian(L);
  Q3 = getMedian(U);
  IQR = parseFloat(Q3 - Q1).toFixed(1);
  console.log(IQR);
}

function getMedian(arr) {
  let median;
  if (arr.length % 2 === 0) {
    let midpoint = arr.length / 2;
    median = (arr[midpoint] + arr[midpoint - 1]) / 2;
  } else {
    median = arr[Math.floor(arr.length / 2)];
  }
  return median;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const val = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valTemp) => parseInt(valTemp, 10));

  const freq = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((freqTemp) => parseInt(freqTemp, 10));

  interQuartile(n, val, freq);
}
