var subsets = function(nums) {
    let results = []
    let subset = []
    const dfs = i => {
        if (i >= nums.length) {
            results.push(subset.slice())
            return
        }
        subset.push(nums[i])
        dfs(i + 1)

        subset.pop()
        dfs(i+1)
    }
    dfs(0)
    return results
};
