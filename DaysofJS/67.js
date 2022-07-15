/*
Objective
In this challenge, we go further with normal distributions. We recommend reviewing the previous challenge's Tutorial before attempting this problem.

Task
The final grades for a Physics exam taken by a large group of students have a mean of  and a standard deviation of . If we can approximate the distribution of these grades by a normal distribution, what percentage of the students:

Scored higher than  (i.e., have a )?
Passed the test (i.e., have a )?
Failed the test (i.e., have a )?
Find and print the answer to each question on a new line, rounded to a scale of  decimal places.

Input Format

There are  lines of input (shown below):

70 10
80
60
The first line contains  space-separated values denoting the respective mean and standard deviation for the exam. The second line contains the number associated with question . The third line contains the pass/fail threshold number associated with questions  and .

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

There are three lines of output. Your answers must be rounded to a scale of  decimal places (i.e.,  format):

On the first line, print the answer to question  (i.e., the percentage of students having ).
On the second line, print the answer to question  (i.e., the percentage of students having ).
On the third line, print the answer to question  (i.e., the percentage of students having ).
*/
function processData(input) {
  //Enter your code here
  function erf(x) {
    let a1 = 0.254829592,
      a2 = -0.284496736,
      a3 = 1.421413741,
      a4 = -1.453152027,
      a5 = 1.061405429,
      p = 0.3275911;

    let sign = 1;

    if (x < 0) sign = -1;
    x = Math.abs(x);
    let t = 1.0 / (1.0 + p * x);
    let y =
      1.0 -
      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  }

  function cumulativeDistribution(m, sd, x) {
    return (1 / 2) * (1 + erf((x - m) / (sd * Math.sqrt(2))));
  }

  input = input.split("\n");
  input[0] = input[0].split(" ");

  let m = parseFloat(input[0][0]),
    sd = parseFloat(input[0][1]),
    a = parseFloat(input[1]),
    bc = parseFloat(input[2]);

  console.log(((1 - cumulativeDistribution(m, sd, a)) * 100).toFixed(2));
  console.log(((1 - cumulativeDistribution(m, sd, bc)) * 100).toFixed(2));
  console.log((cumulativeDistribution(m, sd, bc) * 100).toFixed(2));
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
