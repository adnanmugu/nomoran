import Files from './files.js';

export default class Sequences extends Files {
  /**
   *
   * @param {number} rows
   * @param {number} cols
   * @param {number} baseNum
   * @param {number} paddNum
   */
  constructor(name, type, fileCount, rows, cols, baseNum, paddNum) {
    super(name, type, fileCount);
    this.rows = rows;
    this.cols = cols;
    this.paddNum = paddNum;
    this.baseNum = baseNum;
  }

  printNum(firstValue, lastValue, paddNum) {
    const sequence = [];

    for (firstValue; firstValue <= lastValue; firstValue++) {
      sequence.push(firstValue.toString().padStart(paddNum, '0'));
    }
    return sequence;
  }

  /**
   *
   * @param {boolean} isFile
   * @returns
   */
  getFirstValues() {
    const result = [];
    const firstVal = [];
    const lastVal = [];
    const segmentValue = this.rows * this.cols;

    let currFirst = this.baseNum;
    // let currLast = this.fileCount == 1 ? this.cols : segmentValue;
    // let iterations = this.fileCount == 1 ? this.rows : this.fileCount;
    let currLast = this.cols;
    let iterations = this.rows;

    for (let i = 1; i <= iterations; i++) {
      firstVal.push(currFirst);
      lastVal.push(currLast);
      // lastValues.push([currLast]);

      currFirst += currLast;
      currLast += currLast;
    }

    return [firstVal, lastVal];
  }

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
