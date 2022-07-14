/**
Objective
In this challenge, we go further with geometric distributions. We recommend reviewing the Geometric Distribution tutorial before attempting this challenge.

Task
The probability that a machine produces a defective product is . What is the probability that the  defect is found during the first  inspections?

Input Format

The first line contains the respective space-separated numerator and denominator for the probability of a defect, and the second line contains the inspection we want the probability of the first defect being discovered by:

1 3
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
 */

function processData(input) {
  //Enter your code here
  let tempP = input.split("\n")[0].split(" ");
  let p = tempP[0] / tempP[1];
  let n = input.split("\n")[1];

  function negativeBinomialDistribution(n, p) {
    return 1 - Math.pow(1 - p, n);
  }

  console.log(negativeBinomialDistribution(n, p).toFixed(3));
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
