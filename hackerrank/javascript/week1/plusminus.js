function plusMinus(arr) {
    // Write your code here
    let positiveNums = 0
    let negativeNums = 0
    let zeroes = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNums += 1
        }
         if (arr[i] > 0) {
            positiveNums += 1
        }
         if (arr[i] === 0) {
            zeroes += 1
        }
    }
    console.log((positiveNums/arr.length).toFixed(6))
    console.log((negativeNums/arr.length).toFixed(6))
    console.log((zeroes/arr.length).toFixed(6))
}
