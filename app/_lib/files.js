import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { stringify } from 'csv-stringify';

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

  /**
   * return fileCount property
   */
  get getCount() {
    return this.fileCount;
  }

  /**
   * Generates CSV files from a multidimensional array, where each sub-array
   * corresponds
   * to a separate CSV file. The function dynamically generates headers based
   * on the number
   * of rows in each sub-array and outputs the CSV files to the specified
   * directory.
   *
   * @param {Array} array - 3d array containing data for .csv files.
   */
  generateCsvFiles(array) {
    const zip = new JSZip();

    array.forEach((innerArray, index) => {
      const headers = innerArray.map((_, i) => `#${i + 1}`);

      // Prepare rows for CSV
      const rowCount = innerArray[0].length;
      const rows = [];

      for (let i = 0; i < rowCount; i++) {
        const row = innerArray.map((array) => array[i]);
        rows.push(row);
      }

      // Add headers as the first row
      rows.unshift(headers);

      // Convert to CSV format
      stringify(rows, (err, output) => {
        if (err) {
          console.error('Error generating CSV:', err);
          return;
        }
        // Write the CSV output to a file
        // const filePath = `../../pages/temp/${this.name}_${index}.csv`;
        // fs.writeFileSync(filePath, output);
        // console.log(`CSV file generated: ${filePath}`);
        const fileName = `${this.name}_${index}.csv`;

        zip.file(fileName, output);
        console.log(`csv file add to .zip: ${fileName}`);
      });
    });

    zip
      .generateAsync({ type: 'blob' })
      .then((content) => {
        saveAs(content, `${this.name}.zip`);
        console.log('.zip file generated and downloaded.');
      })
      .catch((err) => {
        console.error('error generating zip file:', err);
      });
  }
}
