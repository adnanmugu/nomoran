import Files from './files.js';

export default class Sequences extends Files {
  /**
   * Initializes a new instance of the class with specified properties.
   *
   * @param {string} name - name of the instance.
   * @param {string} type - type of the instance.
   * @param {number} fileCount - number of files to be processed.
   * @param {number} rows - number of rows to be handled
   * @param {number} cols - number of columns to be handled
   * @param {number} baseNum - starting num for sequences
   * @param {number} paddNum - number of digits for padding numbers (0 means
   * no padding).
   */
  constructor(name, type, fileCount, rows, cols, baseNum, paddNum) {
    super(name, type, fileCount);
    this.rows = rows;
    this.cols = cols;
    this.paddNum = paddNum;
    this.baseNum = baseNum;
  }

  /**
   * generates a sequenct that has been process
   * @param {string[]}  - An array of formatted string representations
   */
  getSequence(data) {}

  /**
   * Generates a sequence of numbers between `startValue` and `endValue`,
   * formatted as strings.
   *
   * If `paddNum` is greater than 0, each number is padded with leading
   * zeros to match the specified width. Otherwise, the numbers are
   * converted to strings without padding.
   *
   * @param {number} startValue - starting number of the sequence.
   * @param {number} endValue - ending number of the sequence.
   * @returns {string[]} - An array of formatted string representations
   * of the numbers in the sequence.
   */
  printNum(startValue, endValue) {
    const sequence = [];

    for (let curr = startValue; curr <= endValue; curr++) {
      const formattedNumber =
        this.paddNum > 0
          ? curr.toString().padStart(this.paddNum, '0')
          : curr.toString();

      sequence.push(formattedNumber);
    }

    return sequence;
  }

  /**
   * Generates an array of first and last values for each file,
   * based on the number of rows and columns.
   *
   * If `fileCount` is 1, the function returns a 2D array of first
   * and last values for the specified rows.
   * If `fileCount` is greater than 1, the function returns a 3D
   * array where each sub-array corresponds
   * to a file and contains the first and last values for the
   * rows in that file.
   *
   * @returns {Array} - A 2D or 3D array containing the first and
   * last values for each row and file.
   */
  getrowsValue() {
    const result = [];
    let currFirst = this.baseNum;
    let currLast = this.cols;

    for (let file = 1; file <= this.fileCount; file++) {
      const firstVal = [];
      const lastVal = [];

      for (let i = 0; i < this.rows; i++) {
        firstVal.push(currFirst);
        lastVal.push(currLast);

        currFirst += this.cols;
        currLast += this.cols;
      }

      if (this.fileCount === 1) {
        return [firstVal, lastVal];
      }

      result.push([firstVal, lastVal]);
    }

    return result;
  }
}
