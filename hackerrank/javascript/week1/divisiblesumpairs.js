function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // n === length of array
    // k === integer divisor
    // ar === array of integers
    // start a count
    // loop through the array with index at 0
    // loop through array again starting at index 1
    // add arr[i] + arr[j] to check if it === k
    // if it does then add one to the count
    let count = 0;
    for (let i = 0; i < n ; i++) {
        for (let j = i+1; j < n ; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count += 1;
            }
        }
    }
    return count;
}
