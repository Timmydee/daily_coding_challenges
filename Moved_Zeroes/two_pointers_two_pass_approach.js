function movedZeroes (nums) {
    let writepos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writepos++] = nums[i]
        }
    }

    while (writepos < nums.length) {
        nums[writepos++] = 0
    }
}



// Complexity Analysis

// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1), since we are modifying the array in place without using additional storage.