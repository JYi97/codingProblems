function lonelyinteger(a) {
    // Write your code here
    let nums = {}
    for (let i = 0; i < a.length; i++) {
        if (nums[a[i]] === undefined) {
            nums[a[i]] = 1
            // console.log(nums)
        } else {
            nums[a[i]] += 1
        }
    }
    // console.log(nums)
    let numbers = Object.keys(nums)
    let count = Object.values(nums)
    for (let i = 0; i < count.length; i++) {
        if (count[i] === 1) {
            return Number(numbers[i])
        }
    }
}
