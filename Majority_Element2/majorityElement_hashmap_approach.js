/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let countMap = new Map()
    let n = nums.length
    let result = []


    for(let num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) +1)
    }

    for (const [key, count] of countMap) {
        if(count > Math.floor(n/3)) {
            result.push(key)
        }
    }
   
   return result
};