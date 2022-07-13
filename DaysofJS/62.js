/*
Objective
In this challenge, we learn about geometric distributions. Check out the Tutorial tab for learning materials!

Task
The probability that a machine produces a defective product is . What is the probability that the  defect occurs the  item produced?

Input Format

The first line contains the respective space-separated numerator and denominator for the probability of a defect, and the second line contains the inspection we want the probability of being the first defect for:

1 3
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/
function factorial(n) {
  var f = 1;
  for (var i = 1; i <= n; i++) f *= i;
  return f;
}

function b(x, n, p) {
  var q = 1 - p;
  return (
    (factorial(n) / (factorial(x) * factorial(n - x))) *
    Math.pow(p, x) *
    Math.pow(q, n - x)
  );
}

function bneg(x, n, p) {
  var q = 1 - p;
  return (
    (factorial(n - 1) / (factorial(x - 1) * factorial(n - x))) *
    Math.pow(p, x) *
    Math.pow(q, n - x)
  );
}

function g(n, p) {
  var q = 1 - p;
  return Math.pow(q, n - 1) * p;
}

function processData(input) {
  var lines = input.split("\n");
  var values = lines[0].split(" ").map(Number);
  var p = values[0] / values[1];
  var runs = parseInt(lines[1]);
  var prob = g(runs, p);

  console.log(prob.toFixed(3));
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
