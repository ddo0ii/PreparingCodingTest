/*
Objective
In this challenge, we learn about Poisson distributions. Check out the Tutorial tab for learning materials!

Task
A random variable, , follows Poisson distribution with mean of . Find the probability with which the random variable  is equal to .

Input Format

The first line contains 's mean. The second line contains the value we want the probability for:

2.5
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/

function processData(input) {
  //Enter your code here
  let lines = input.split("\n");
  let mean = Number(lines[0]);
  let x = parseInt(lines[1]);
  let factorial = function (n) {
    return n > 2 ? n * factorial(n - 1) : n == 0 ? 1 : n;
  };
  let posissonDistProb = function (lambda, k) {
    return (Math.pow(mean, k) * Math.pow(Math.E, -1 * lambda)) / factorial(k);
  };
  let round = function (value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  let result = posissonDistProb(mean, x);
  console.log(round(result, 3));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
