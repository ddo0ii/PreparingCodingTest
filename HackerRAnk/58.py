# Objective
# In this challenge, we practice calculating quartiles. Check out the Tutorial tab for learning materials and an instructional video!

# Task
# Given an array, , of  integers, calculate the respective first quartile (), second quartile (), and third quartile (). It is guaranteed that , , and  are integers.

# Example

# The sorted array is  which has an odd number of elements. The lower half consists of , and its median is . The middle element is  and represents the second quartile. The upper half is  and its median is . Return .


# The array is already sorted. The lower half is  with a median = . The median of the entire array is , and of the upper half is . Return .

# Function Description

# Complete the quartiles function in the editor below.

# quartiles has the following parameters:

# int arr[n]: the values to segregate
# Returns

# int[3]: the medians of the left half of ,  in total, and the right half of .
# Input Format

# The first line contains an integer, , the number of elements in .
# The second line contains  space-separated integers, each an .

# Constraints

# , where  is the  element of the array.
# Sample Input

# STDIN                   Function
# -----                   --------    
# 9                       arr[] size n = 9 
# 3 7 8 5 12 14 21 13 18  arr = [3, 7, 8, 5, 12, 14, 21, 13,18]
# Sample Output

# 6
# 12
# 16
# Explanation

# . There is an odd number of elements, and the middle element, the median, is .

# As there are an odd number of data points, we do not include the median (the central value in the ordered list) in either half:

# Lower half (L): 3, 5, 7, 8

# Upper half (U): 13, 14, 18, 21

# Now find the quartiles:

#  is the . So, .
#  is the . So, .
#  is the . So, .

#!/bin/python

import math
import os
import random
import re
import sys

#
# Complete the 'quartiles' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def median(nums):
    if len(nums)%2 == 0:
        return int(sum(nums[len(nums)//2-1:len(nums)//2+1])/2)
    else:
        return nums[len(nums)//2]

def quartiles(N,nums):
    nums.sort()
    Q1 = median(nums[:len(nums)//2])
    Q2 = median(nums)
    if N%2 == 0:
        Q3 = median(nums[len(nums)//2:])
    else:
        Q3 = median(nums[len(nums)//2+1:])
    return Q1,Q2,Q3

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(raw_input().strip())

    data = map(int, raw_input().rstrip().split())

    res = quartiles(n, data)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
