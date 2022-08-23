var isAnagram = function(s, t) {
    let letterCount = {}
  for (let i = 0; i < s.length; i++) {
  	if (letterCount[s[i]] === undefined) {
    letterCount[s[i]] = 1
    } else {
    letterCount[s[i]] += 1
    }
    }
  for (let i = 0; i < t.length; i++) {
  if (letterCount[t[i]]) {
  	letterCount[t[i]] -= 1
  }
  }
 let count = Object.values(letterCount)
 for (let i = 0; i < count.length; i++) {
 	if (count[i] !== 0) return false
 }
 return true
};
