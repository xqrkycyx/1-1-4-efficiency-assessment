/**
 The missing number problem
 Implement algorithm 1 here
*/

// PSEUDOCODE:
// function missing1
// accepts: A an array of N - 1 numbers

//   declare a variable N and set it equal to the length of A + 1
//   for i = 1 to N do
//     declare variable found and set it to false
//     declare variable j and set it to 0
//      while found is false AND j is less than the length of A do
//       if i is equal to A[j] then
//         set found to true
//       increment j
//     if found is false then
//       return i

function missing1(A) {
  // Accepts: A an array of N - 1 numbers

  // Declare a variable N and set it equal to the length of A + 1
  const N = A.length + 1;

  // Iterate over all numbers from 1 to N
  for (let i = 1; i <= N; i++) {
    // Declare variable found and set it to false
    let found = false;

    // Declare variable j and set it to 0
    let j = 0;

    // While found is false AND j is less than the length of A
    while (!found && j < A.length) {
      // If i is equal to A[j], then set found to true
      if (i === A[j]) {
        found = true;
      }
      // Increment j
      j++;
    }

    // If found is false, then return i
    if (!found) {
      return i;
    }
  }
}

/**
The missing number problem
Implement algorithm 2 here
*/
