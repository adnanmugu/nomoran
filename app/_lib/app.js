import Sequences from 'app/_lib/sequences.js';

export default function initilizeFile(data) {
  const { fileName, type, fileCount, rows, cols, paddNum, firstValue } = data;

  const proj = new Sequences(
    fileName,
    type,
    fileCount,
    rows,
    cols,
    firstValue,
    paddNum
  );

  const rowsValue = proj.getrowsValue();
  const sequence = proj.getSequence(rowsValue);
}
