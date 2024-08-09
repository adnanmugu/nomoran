import Files from './files.js';
import Sequences from './sequences.js';

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

  // const rowsVal = proj.getrowsValue();
  const sequence = proj.getSequence(proj.getrowsValue());
  return sequence;
}
