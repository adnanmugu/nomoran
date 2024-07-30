class Files {
  /**
   * Creates an instance of the Files class
   * @param {string} name name for configuration file
   * @param {number} rows value of rows for generate
   * @param {number} columns value of column for generate
   * @param {number} totalFile total file iteration
   * @param {number} paddNum digit to pad the sequence
   */
  constructor(name, type, rows, columns, totalFile, paddNum, firstValue) {
    this.name = name;
    this.type = type;
    this.rows = rows;
    this.columns = columns;
    this.paddNum = paddNum;
    this.totalFile = totalFile;
    this.totalSize = '';
    this.sequence = this.getSequence(firstValue);
  }

  /**
   * Generates a sequence of numbers based on the provided row
   * and column lengths, starting value, and padding number
   * @param {number} firstValue starting value for sequence
   * @returns {Array} filling a sequence property with
   * sequence number
   */
  getSequence(firstValue) {
    const result = [];
    const firstValues = [];
    const lastValues = [];

    if (this.type !== 'number') {
      return `Feature is not yet available`;
    }

    if (this.rows === 1) {
      return result.push(this.#printNum(this.rows, this.columns));
    }

    let first = firstValue;
    let last = this.columns;

    // find a firstValue and lastVAlue
    for (let i = 1; i <= this.rows; i++) {
      firstValues.push(first);
      lastValues.push(last);

      first += this.columns;
      last += this.columns;
    }

    firstValues.forEach((value, i) => {
      result.push(this.#printNum(value, lastValues[i], this.paddNum));
    });

    return result;
  }

  /**
   * Generates a sequence of numbers, formatted as string with
   * leading zero or padding number
   * @param {number} firstValue starting value for iteration
   * @param {number} lastValue end value for iteration
   * @returns
   */
  #printNum(startValue, endValue) {
    const sequence = [];

    // Check if padding is required
    if (this.paddNum === 0) {
      for (let curr = startValue; curr <= endValue; curr++) {
        sequence.push(curr.toString());
      }
    } else {
      for (let curr = startValue; curr <= endValue; curr++) {
        sequence.push(curr.toString().padStart(this.paddNum, '0'));
      }
    }

    return sequence;
  }

  /**
   * find a length of an nested array
   * @param {Array} arr array for checking
   * @returns number of length array
   */
  getLength(arr) {
    let length = 0;
    function countElement(array) {
      array.forEach((elem) => {
        if (Array.isArray(elem)) {
          countElement(elem);
        } else {
          length++;
        }
      });
    }

    countElement(arr);
    return length;
  }

  /**
   * Processing an array that get from input user then that
   * array is gonna be converted into .csv file and if file
   * is more than one file the result is gonna be a .zip file
   * @param {number} isOneFile indicates if data's one file or more
   * @param {array} data the array data to be process
   * @param {string} filename the name of file to save data
   */
  #generateCsv(isOneFile, data, filename) {
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
}
