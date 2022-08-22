function timeConversion(s) {
    // Write your code here
          let newTime = ''
    if (s[8] === 'A') {
        if (s.slice(0, 2) === '12') {
          newTime += '00'
        newTime += s.slice(2, 8)
      } else {
          newTime += s.slice(0, 8)
      }
    } else {
        if (s.slice(0, 2) === '12') {
        newTime += s.slice(0, 8)
      } else {
        let hour = parseInt(s.slice(0, 2)) + 12
        newTime += hour.toString()
        newTime += s.slice(2, 8)
      }
    }
        return newTime

}
