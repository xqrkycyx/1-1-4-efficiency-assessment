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

// PSEUDOCODE:
// function missing2
//   // accepts: A an array of N - 1 numbers

//   declare a variable N and set it equal to the length of A + 1
//   declare a variable fullSum and set it to the sum of numbers from 1 to N inclusive
//   declare a variable sum. Find the sum of all numbers in A and store the sum in the variable sm
//   return the difference between fullSum and sum (i.e. fullSum - sum)

function missing2(A) {
  // Accepts: A an array of N - 1 numbers

  // Declare a variable N and set it equal to the length of A + 1
  const N = A.length + 1;

  // Declare a variable fullSum and set it to the sum of numbers from 1 to N inclusive
  const fullSum = (N * (N + 1)) / 2;

  // Declare a variable sum. Find the sum of all numbers in A and store the sum in the variable sum
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  // Return the difference between fullSum and sum (i.e. fullSum - sum)
  return fullSum - sum;
}
