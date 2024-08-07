export default class Files {
  /**
   *
   * @param {string} name
   * @param {string} type
   * @param {number} fileCount
   */
  constructor(name, type, fileCount) {
    this.name = name;
    this.type = type;
    this.fileCount = fileCount;
  }

  generateCsv(isOneFile, data, filename) {
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
