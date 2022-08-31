var isPalindrome = function(x) {
    let intString = x.toString()
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < intString.length; i++) {
        str1 += intString[i]
    }
    for (let i = intString.length - 1; i >= 0; i--) {
        str2 += intString[i]
    }
    return (str1 === str2)
};
