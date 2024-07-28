/**
 * Find a difference value
 * @param {number} numone is a first value
 * @param {number} numtwo columnLength
 * @returns difference number between firstvalue and columnLength
 */
function getDifference(numone, numtwo) {
  return Math.abs(numone - numtwo);
}

/**
 * Print a value
 * @param {number} firstPosition
 * @param {number} endPosition
 * @returns
 */
function printNum(firstPosition, endPosition, paddNum) {
  const result = [];

  for (firstPosition; firstPosition <= endPosition; firstPosition++) {
    result.push(firstPosition.toString().padStart(paddNum, '0'));
  }
  return result;
}

/**
 * Generates a sequence of numbers based on the provided row
 * and column lengths, starting value, and padding number
 * @param {Number} rowLength number of rows to generates
 * @param {Number} columLength number of column to generate
 * @param {Number} firstValue starting value for sequence
 * @param {Number} paddnum padding nubmber to be used
 * @returns {Array} a 2d array containing the generated
 * sequences of numbers
 */
function numbering(rowLength, columnLength, firstValue, paddNum) {
  const result = [];
  const firstPosition = [];
  const endPosition = [];

  if (rowLength === 1) {
    firstPosition.push(firstValue);
  } else {
    let first = firstValue;
    let end = columnLength;

    // difference value / nilai selisih
    const diff = getDifference(firstValue, columnLength + 1);

    for (let i = 1; i <= rowLength; i++) {
      firstPosition.push(first);
      endPosition.push(end);

      // console.log(`${first} > ${end}`);

      first += diff;
      end += diff;
    }
  }

  // console.log(firstPosition, endPosition);
  firstPosition.forEach((position, i) => {
    result.push(printNum(position, endPosition[i], paddNum));
  });
  return result;
}

// const result = numbering(2, 100, 1, 3);
// console.log(result);

function getNumber(rowLength, columnLength, firstValue, paddNumber) {
  const result = numbering(rowLength, columnLength, firstValue, paddNumber);
  return result;
}
export { getNumber };
