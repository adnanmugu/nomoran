import { promises as fs } from 'fs';
import path from 'path';
import archiver from 'archiver';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { content, fileName } = req.body;
      const txtFilePath = path.join(process.cwd(), `${fileName}.txt`);

      // Write content to a .txt file
      await fs.writeFile(txtFilePath, content);

      // Create a zip file
      const zipFilePath = path.join(process.cwd(), `${fileName}.zip`);
      const output = fs.createWriteStream(zipFilePath);
      const archive = archiver('zip', {
        zlib: { level: 9 }, // Sets the compression level.
      });

      output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log(
          'archiver has been finalized and the output file descriptor has closed.'
        );

        res
          .status(200)
          .json({ message: 'Zip file created', filePath: zipFilePath });
      });

      output.on('end', function () {
        console.log('Data has been drained');
      });

      archive.on('warning', function (err) {
        if (err.code !== 'ENOENT') {
          throw err;
        }
      });

      archive.on('error', function (err) {
        throw err;
      });

      archive.pipe(output);

      // Append the text file to the zip
      archive.file(txtFilePath, { name: `${fileName}.txt` });

      await archive.finalize();
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
