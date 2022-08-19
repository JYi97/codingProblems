def max_value(nums):
    max = float('-inf')
    for i in range(len(nums)):
        if nums[i] > max:
            max = nums[i]
    return max

# print(max_value([1,3,34, 100, 41, 29, 11, 24, 53, 22, 12]))
