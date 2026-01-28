const { count } = require("console")

function majorityElement(nums) {
  //  initialize candate 1 and 2
  // initialize count 1and 2


  // find potetial candidate
  // loop through nums array
  // if num equals candidate1 , increase count 
  // else num equals candidate2, increase count
  // else count1 is 0, then candidate1 = num , count1 = 1
  // else count2 is 0, then candidate2 = num , count2 = 1
  // else counts --


  // verify candidates
  // initialize count 1 and 2 as 0

  // loop through nums array
  // if num is candidate1 , increase count1
  // else num is candidate2 , increase count2

  // initiale result as empty array
  // initialize threshold as nums.length/3

  // if count1 > threshols push candidate1 to resukt
  // if count2 > threshols push candidate1 to resukt

  // return result


  let candidate1 = null
  let candidate2 = null

  let count1 = 0
  let count2 = 0

  // find potential candidates
  for (let num of nums) {
    if (num === candidate1) {
      count1 += 1
    } else if (num === candidate2) {
      count1 += 1
    } else if (count1 === 0) {
      candidate1 = num
      count1 = 1
    } else if (count2 === 1) {
      candidate2 = num
      count2 = 0
    } else {
      count1--
      count2--
    }
  }


  // verify candidates
  count1 = 0
  count2 = 0

  for(let num of nums) {
    if(num === candidate1) {
      count1++
    } else if (num === candidate2) {
      count2++
    }
  }

  let results = []

  let threshold = Math.floor(nums.length/3)

  if(count1 > threshold) results.push(candidate1)
  if(count2 > threshold) results.push(candidate2)

  return results
}


const arr = [1,2,3,1,1,2,2,3,3,3,3,3,1,1,1,1,1,1]

console.log(majorityElement(arr))

