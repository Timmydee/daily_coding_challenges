function isSorted(arr) {

  if(arr.length <= 1) {
    return 'Ascending'
  }

  let isAscending = true;
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      isAscending = false
      break
    }
  }

  if(isAscending) {
    return 'Ascending'
  }

  let isDescending = true;
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < arr[i + 1]) {
      isDescending = false
      break
    }
  }

  if(isDescending) {
    return 'Descending'
  }


  return 'Not sorted';
}