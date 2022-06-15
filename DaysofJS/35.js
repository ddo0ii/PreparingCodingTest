// binary numbers
/**
Objective
Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation. When working with different bases, it is common to show the base as a subscript.

Example

The binary representation of  is . In base , there are  and  consecutive ones in two groups. Print the maximum, .

Input Format

A single integer, .

Constraints

Output Format

Print a single base- integer that denotes the maximum number of consecutive 's in the binary representation of .

Sample Input 1

5
Sample Output 1

1
Sample Input 2

13
Sample Output 2

2
Explanation

Sample Case 1:
The binary representation of  is , so the maximum number of consecutive 's is .

Sample Case 2:
The binary representation of  is , so the maximum number of consecutive 's is .
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let n = parseInt(readLine().trim(), 10);
    let arr = [];
    
    while(n >= 1) {
        if (n%2 == 0) {
            arr.push(0);
        }
        if (n%2 == 1) {
            arr.push(1);
        }
        n = Math.floor(n/2);
    }
    let max = 0;
    let cur = 0;
    
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == 1)
            cur++;
        else if (arr[i] == 0) {
            if(cur > max)
                max = cur;
            cur = 0;
        }
    }
    if(cur > max)
        max = cur;
        
    console.log(max);
}
