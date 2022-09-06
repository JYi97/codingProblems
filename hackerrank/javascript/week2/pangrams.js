function pangrams(s) {
    // Write your code here
    let letters = "abcdefghijklmnopqrstuvwxyz"

    let letterCount = {}

    for (let i = 0; i < letters.length; i++) {
        letterCount[letters[i]] = 0
    }

    for(let i = 0; i < s.length; i++) {
        if (letters.includes(s[i].toLowerCase())) {
            letterCount[s[i].toLowerCase()] += 1
        }
    }

    let numberCount = Object.values(letterCount)

    if (numberCount.includes(0)) {
        return "not pangram"
    }
    return "pangram"

}
