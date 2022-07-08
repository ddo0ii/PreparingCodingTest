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
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
  // Print your answers to 1 decimal place within this function
  let mean = 0;
  let stdValue = 0;
  let rValue = 0;

  for (let element of arr) {
    mean = mean + element;
  }

  for (let element2 of arr) {
    stdValue = stdValue + Math.pow(element2 - mean / arr.length, 2);
  }

  rValue = Math.sqrt(stdValue / arr.length, 2);
  console.log(rValue);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valsTemp) => parseInt(valsTemp, 10));

  stdDev(vals);
}
