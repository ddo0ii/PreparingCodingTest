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
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMedian(arr) {
  let nlength = arr.length;
  let median = 0;
  let midpoint = Math.floor((nlength - 1) / 2);

  // if even
  if (nlength % 2 == 0) {
    median = (arr[midpoint] + arr[midpoint + 1]) / 2;
  } else {
    median = arr[midpoint];
  }
  return median;
}

function quartiles(arr) {
  // Write your code here
  let nlength = arr.length;
  let midpoint = Math.floor(nlength / 2);
  let offset = nlength % 2;

  console.log(getMedian(arr.slice(0, midpoint)));
  console.log(getMedian(arr));
  console.log(getMedian(arr.slice(midpoint + offset)));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const data = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((dataTemp) => parseInt(dataTemp, 10));

  data.sort(function (a, b) {
    return a - b;
  });
  const res = quartiles(data);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
