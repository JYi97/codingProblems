function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let minTotal = 0
    let maxTotal = 0
    for (let i = 0; i < arr.length; i++) {
        if (min === max) {
            maxTotal = max * 4
            minTotal = min * 4
        }
        if (arr[i] !== min) {
            maxTotal += arr[i]
        }
        if (arr[i] !== max) {
            minTotal += arr[i]
        }
    }
    console.log(minTotal, maxTotal)
}
