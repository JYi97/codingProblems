function breakingRecords(scores) {
    // Write your code here
    let max = scores[0]
    let min = scores[0]
    let maxCount = 0
    let minCount = 0

    for (let i =1; i < scores.length; i++) {
        if (scores[i] > max) {
           maxCount += 1
           max = scores[i]
        }
        if (scores[i] < min) {
            minCount += 1
            min = scores[i]
        }
    }
    return [maxCount, minCount]

}
