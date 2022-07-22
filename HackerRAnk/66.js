/*
Objective
In this challenge, we learn about normal distributions. Check out the Tutorial tab for learning materials!

Task
In a certain plant, the time taken to assemble a car is a random variable, , having a normal distribution with a mean of  hours and a standard deviation of  hours. What is the probability that a car can be assembled at this plant in:

Less than  hours?
Between  and  hours?
Input Format

There are  lines of input (shown below):

20 2
19.5
20 22
The first line contains  space-separated values denoting the respective mean and standard deviation for . The second line contains the number associated with question . The third line contains  space-separated values describing the respective lower and upper range boundaries for question .

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

There are two lines of output. Your answers must be rounded to a scale of  decimal places (i.e.,  format):

On the first line, print the answer to question  (i.e., the probability that a car can be assembled in less than  hours).
On the second line, print the answer to question  (i.e., the probability that a car can be assembled in between  to  hours).
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

    // A&S formula 7.1.26
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
  input[2] = input[2].split(" ");

  let m = parseFloat(input[0][0]),
    sd = parseFloat(input[0][1]),
    a = parseFloat(input[1]),
    b1 = parseFloat(input[2][0]),
    b2 = parseFloat(input[2][1]);

  console.log(cumulativeDistribution(m, sd, a).toFixed(3));
  console.log(
    (
      cumulativeDistribution(m, sd, b2) - cumulativeDistribution(m, sd, b1)
    ).toFixed(3)
  );
}

processData(`20 2
19.5
20 22`);
