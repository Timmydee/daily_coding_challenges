function majorityElement(nums) {
  let candidate = nums[0];
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

let arr = [1,3,2,5,5,5,5]
console.log(majorityElement(arr))