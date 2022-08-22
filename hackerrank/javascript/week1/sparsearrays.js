function matchingStrings(strings, queries) {
    // Write your code here
    let arr = []
    for (let i =0; i < queries.length; i++) {
        let count = 0
        let string = queries[i]
        for (let j = 0; j < strings.length; j++) {
            if (string === strings[j]) {
                count += 1
            }
        }
        arr.push(count)
    }
    return arr

}
