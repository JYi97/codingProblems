import math

def findMedian(arr):
    # Write your code here
    sortArr = sorted(arr)
    median_index = math.floor(len(arr)/2)
    return sortArr[median_index]
