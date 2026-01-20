function moveZeroes(nums) {
    let left = 0

    for(let right=0; right < nums.length; right++) {
        if(nums[right] != 0) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
        }
    }
}

let arr = [1, 0, 2, 4, 0, 5];
moveZeroes(arr);
console.log(arr);


// Time Complexity: O(n), as the array is traversed once.
// Space Complexity: O(1), no additional data structures are used.