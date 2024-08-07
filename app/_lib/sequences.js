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
   * Generates sequences of incrementing numbers based on input data.
   *
   * @param {Array} data - An array of groups, where each group is an array
   * of tuples. Each tuple contains two numbers [startValue, endValue].
   * The function will generate a sequence from startValue to endValue
   * for each tuple.
   * @returns {Array} - A nested array structure where each group contains
   * sequences of formatted numbers. The numbers are padded with leading
   * zeros if paddNum is greater than 0.
   */
  getSequence(data) {
    return data.map((group) => {
      // Map over each tuple in the group
      return group.map(([startValue, endValue]) => {
        const sequence = [];

        for (let curr = startValue; curr <= endValue; curr += 1) {
          const formattedNumber =
            this.paddNum > 0
              ? curr.toString().padStart(this.paddNum, '0')
              : curr.toString();
          sequence.push(formattedNumber);
        }
        // Add the formatted number to the sequence array
        return sequence;
      });
    });
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
    let currLast = this.baseNum + this.cols - 1;

    for (let file = 1; file <= this.fileCount; file++) {
      const firstVal = [];
      // const lastVal = [];

      for (let i = 0; i < this.rows; i++) {
        firstVal.push([currFirst, currLast]);
        // lastVal.push(currLast);

        currFirst += this.cols;
        currLast += this.cols;
      }

      if (this.fileCount === 1) {
        return [firstVal];
      }
      result.push(firstVal);
    }

    return result;
  }

  /**
   * Recursively traverses a nested array structure to retrieve
   * the last value.
   *
   * The function checks each level of the array, diving into the last
   * element until it reaches the deepest nested array. It then returns
   * the last value from that array.
   *
   * This function is particularly useful for consistently structured
   * nested arrays where the deepest array contains the target values.
   *
   * @param {Array} array - Nested array structure from which
   * to retrieve the last value.
   * @returns {string} - Last value from the deepest nested array.
   */
  getLastValue(array) {
    while (Array.isArray(array[array.length - 1])) {
      array = array[array.length - 1];
    }

    return array[array.length - 1];
  }
}

const testo = new Sequences('usep', 'number', 3, 2, 10, 1, 4);
const rowstes = testo.getrowsValue();
const rowseq = testo.getSequence(rowstes);

// console.log(testo.getSequence(rowstes));
console.log(testo.getLastValue(rowseq));
