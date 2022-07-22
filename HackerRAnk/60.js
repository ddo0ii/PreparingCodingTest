/**
Objective
In this challenge, we learn about binomial distributions. Check out the Tutorial tab for learning materials!

Task
The ratio of boys to girls for babies born in Russia is . If there is  child born per birth, what proportion of Russian families with exactly  children will have at least  boys?

Write a program to compute the answer using the above parameters. Then print your result, rounded to a scale of  decimal places (i.e.,  format).

Input Format

A single line containing the following values:

1.09 1
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
 */
function processData(input) {
  //Enter your code here
  var p =
    parseFloat(input.split(" ")[0]) /
    (parseFloat(input.split(" ")[0]) + parseFloat(input.split(" ")[1]));
  var q = 1 - p;
  var n = 6;
  var x = 3;

  var sum = 0;
  for (let i = x; i <= n; i++) {
    sum += binDist(i, n, p, q);
  }
  console.log(sum.toFixed(3));
}

function binDist(x, n, p, q) {
  return combPerm(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
}
function combPerm(n, x) {
  return factorial(n) / (factorial(x) * factorial(n - x));
}
function factorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  }
  // If the number is 0, its factorial is 1.
  else if (num == 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    return num * factorial(num - 1);
  }
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
