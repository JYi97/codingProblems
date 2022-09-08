var isSubsequence = function(s, t) {
    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i += 1
        }
        j += 1
    }
    if (i === s.length) {
        return true
    }
    return false
};
    // for (let i = 0; i < s.length; i++) {
    //     if (t.includes(s[i])) {
    //        s = s.slice(i)
    //         console.log("THIS IS THE S", s)
    //     }
    // }
    // console.log(s)
    // return (s.length > 0)
