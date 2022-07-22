/**
Objective
In this challenge, we go further with binomial distributions. We recommend reviewing the previous challenge's Tutorial before attempting this problem.

Task
A manufacturer of metal pistons finds that, on average,  of the pistons they manufacture are rejected because they are incorrectly sized. What is the probability that a batch of  pistons will contain:

No more than  rejects?
At least  rejects?
Input Format

A single line containing the following values (denoting the respective percentage of defective pistons and the size of the current batch of pistons):

12 10
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print the answer to each question on its own line:

The first line should contain the probability that a batch of  pistons will contain no more than  rejects.
The second line should contain the probability that a batch of  pistons will contain at least  rejects.
Round both of your answers to a scale of  decimal places (i.e.,  format).
 */
function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

function a_sobre_b(a, b) {
  return factorial(a) / (factorial(b) * factorial(a - b));
}

function processData(input) {
  var suma_props = 0;
  for (var i = 0; i <= 2; i++) {
    suma_props += a_sobre_b(10, i) * Math.pow(0.12, i) * Math.pow(0.88, 10 - i);
  }
  console.log(suma_props.toFixed(3));
  suma_props = 0;
  for (var i = 0; i <= 1; i++) {
    suma_props += a_sobre_b(10, i) * Math.pow(0.12, i) * Math.pow(0.88, 10 - i);
  }
  console.log((1 - suma_props).toFixed(3));
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
