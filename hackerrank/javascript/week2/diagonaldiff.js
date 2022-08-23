function diagonalDifference(arr) {
    // Write your code here
    // [ [1,2,3] , [4,5,6] , [7,8,9] ]
    // Define sum for L -> R and R -> L Diagonals
    // Loop through the arr arr.length times
    // Through each iteration grab index value from iteration and find index inner array
    // Return abs value of diff of L->R Sum - R->L Sum
    let leftToRight = 0
    let rightToLeft = 0
    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToLeft += arr[i][(arr.length - 1) - i]
    }
    let diff = Math.abs(leftToRight - rightToLeft)
    return diff
}
