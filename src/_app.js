/**
 * get value from string
 * @param {string} value input string value
 * @returns number
 */
function getPaddNumber(value) {
  switch (value) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    default:
      return null; // or any default value or error handling
  }
}

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
 *
 * @param {number} rowLength
 * @param {number} columLength
 * @param {number} firstValue
 * @param {number} paddnum
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

const result = numbering(2, 100, 1, getPaddNumber('three'));
// console.log(result);

function getNumber(rowLength, columnLength, firstValue, paddNumber) {
  const paddnum = getPaddNumber(paddNumber);
  const result = numbering(rowLength, columnLength, firstValue, paddnum);
  return result;
}
export { getNumber };
