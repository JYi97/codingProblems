def plusMinus(arr):
    # Write your code here
    length = len(arr)
    positiveCount = 0
    zeroes = 0
    negativeCount = 0
    for i in range(length):
        if arr[i] > 0:
            positiveCount += 1
        if arr[i] == 0:
            zeroes += 1
        if arr[i] < 0:
            negativeCount += 1
    print(format(positiveCount/length, '.6f'))
    print(format(negativeCount/length, '.6f'))
    print(format(zeroes/length, '.6f'))
