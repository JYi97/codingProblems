function findMedian(arr) {
    // Write your code here
    let medianIndex = Math.floor(arr.length/2);
    let sortedArr = arr.sort(function(a,b){
        return a - b
    });
    return sortedArr[medianIndex]
}
