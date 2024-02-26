/**
 The cable problem
 Implement algorithm 1 here
*/

// PSEUDOCODE:
// function cable1
// // accepts: currentLength - an integer between 1 and 1,000,000,000
// //          requireLength - an integer between 1 and 1,000,000,000
// //          saleLength - an integer between 1 and 1,000,000,000

// declare a variable named count and set it equal to 0
// declare a variable named i and set it equal to currentLength
// while i is less than requiredLength do
//     Add saleLength to i
//     increment count
// return count

/**
 * Calculate the minimum number of lengths of cable that need to be purchased
 * @param {number} currentLength - The length of cable that is already possessed by the company
 * @param {number} requiredLength - The total length of cable needed for the task
 * @param {number} saleLength - The length of a single piece of cable that can be bought
 * @returns {number} - The minimum number of lengths of cable needed to be purchased
 */
function cable1(currentLength, requiredLength, saleLength) {
  // Declare a variable named count and set it equal to 0
  let count = 0;

  // Declare a variable named i and set it equal to currentLength
  let i = currentLength;

  // While i is less than requiredLength, increment i by saleLength and count by 1
  while (i < requiredLength) {
    i += saleLength;
    count++;
  }

  // Return count
  return count;
}

/**
 The cable problem
 Implement algorithm 2 here
*/

// PSEUDOCODE:
// function cable2
//    // accepts: currentLength - an integer between 1 and 1,000,000,000
//    //          requireLength - an integer between 1 and 1,000,000,000
//    //          saleLength - an integer between 1 and 1,000,000,000

//    declare a variable named distance, assign it to the difference between requiredLength and currentlength
//    declare a variable named total,
//    divide distance by saleLength and round up to the nearest integer, assign this value to total
//    return total

/**
 * Calculate the minimum number of lengths of cable that need to be purchased
 * @param {number} currentLength - The length of cable that is already possessed by the company
 * @param {number} requiredLength - The total length of cable needed for the task
 * @param {number} saleLength - The length of a single piece of cable that can be bought
 * @returns {number} - The minimum number of lengths of cable needed to be purchased
 */
function cable2(currentLength, requiredLength, saleLength) {
  // Declare a variable named distance, assign it to the difference between requiredLength and currentlength
  const distance = requiredLength - currentLength;

  // Declare a variable named total, divide distance by saleLength and round up to the nearest integer, assign this value to total
  const total = Math.ceil(distance / saleLength);

  // Return total
  return total;
}

module.exports = { cable1, cable2 };
