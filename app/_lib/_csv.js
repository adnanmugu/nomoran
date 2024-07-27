import fs from 'fs';
import { convertArrayToCSV } from 'convert-array-to-csv';
import { getNumber } from './_app.js';

const data = getNumber(12, 50, 1, 'three');

/**
 * Processing an array that get from input user then that
 * array is gonna be converted into .csv file and if file
 * is more than one file the result is gonna be a .zip file
 * @param {number} isOneFile indicates if data's one file or more
 * @param {array} data the array data to be process
 * @param {string} filename the name of file to save data
 */
function generateCsv(isOneFile, data, filename) {
  // Transform the array into columns for CSV
  // Determine the maximum length of the sub-arrays
  const head = [];
  const transformedArray = [];
  const maxLength = Math.max(...data.map((arr) => arr.length));

  for (let i = 0; i < maxLength; i++) {
    const row = [];
    for (let j = 0; j < data.length; j++) {
      row.push(data[j][i] !== undefined ? data[j][i] : '');
    }
    transformedArray.push(row);
  }

  data.forEach((number, i) => {
    const firstNumber = number[0];
    const lastNumber = number[number.length - 1];

    head.push(`#${i + 1}_${firstNumber}-${lastNumber}`);
  });

  // Convert the array to a CSV string with custom headers
  const csv = convertArrayToCSV(transformedArray, {
    header: head,
    separator: ',',
  });

  try {
    fs.writeFileSync('./test.csv', csv);
    console.log('file written succesfully');
  } catch (err) {
    console.log(err);
  }
}

generateCsv(true, data, 'dummy');
// console.log(generateCsv(true, kuda, 'kuda'));
