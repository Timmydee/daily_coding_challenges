function findLeftHandedSeats(table) {
  let count = 0;
  
  // Process TOP ROW (facing DOWN)
  for (let i = 0; i < table[0].length; i++) {
    if (table[0][i] === "U") {
      // For top row, left is i+1
      if (i + 1 < table[0].length) {
        // Check if left seat is NOT "R"
        if (table[0][i + 1] !== "R") {
          count++;
        }
      } else {
        // Corner seat (rightmost), no one to the left
        count++;
      }
    }
  }
  
  // Process BOTTOM ROW (facing UP)
  for (let i = 0; i < table[1].length; i++) {
    if (table[1][i] === "U") {
      // For bottom row, left is i-1 (opposite direction)
      if (i - 1 >= 0) {
        // Check if left seat is NOT "R"
        if (table[1][i - 1] !== "R") {
          count++;
        }
      } else {
        // Corner seat (leftmost), no one to the left
        count++;
      }
    }
  }
  
  return count;
}