function majorityElement(nums) {
    let countMap = new Map()
    let n = nums.length;
    
    for(const num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);

        if(countMap.get(num) > Math.floor(n/2)) {
            return num
        }
    }

    return -1
}

let arr = [1,3,2,5,5,5,5]
console.log(majorityElement(arr))