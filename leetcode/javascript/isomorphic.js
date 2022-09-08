var isIsomorphic = function(s, t) {
    let sHashMap = {}
    let tHashMap = {}

    for (let i = 0; i < s.length; i++) {
        if ((sHashMap[s[i]] && sHashMap[s[i]] !== t[i]) || (tHashMap[t[i]] && tHashMap[t[i]] !== s[i])) {
            return false
        }
        sHashMap[s[i]] = t[i]
        tHashMap[t[i]] = s[i]
    }
    return true
};

//     for (let i = 0; i < s.length; i++) {
//         if (!sHashMap[s[i]]) {
//             sHashMap[s[i]] = 1
//         }
//         if (sHashMap[s[i]]) {
//             sHashMap[s[i]] += 1
//         }
//     }

//     for (let i = 0; i < t.length; i++) {
//         if (!tHashMap[t[i]]) {
//             tHashMap[t[i]] = 1
//         }
//         if (tHashMap[t[i]]) {
//             tHashMap[t[i]] += 1
//         }
//     }

//     let sValues = Object.values(sHashMap)
//     let tValues = Object.values(tHashMap)

    // console.log("THIS IS THE S VALUES", sValues)
    // console.log("THIS IS THE T VALUES", tValues)


    // return (sValues === tValues)
