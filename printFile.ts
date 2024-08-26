import * as fs from 'fs';
import * as path from 'path';

const fileName = path.join(__dirname, 'starship.txt');

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error  ${err.message}`);
        process.exit(1);
    }
    console.log(data);
});
