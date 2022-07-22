// array 중 두번째 가장 큰 값 찾기
/**
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
Returns

int: the second largest number in 
Input Format

The first line contains an integer, , the size of the  array.
The second line contains  space-separated numbers that describe the elements in .

Constraints

, where  is the number at index .
The numbers in  may not be distinct.
Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}