const readline = require('readline');
const fs = require('fs');

/**
 * we need to read the lines of the file and convert the string to Title Case
 */

const writeStream = fs.createWriteStream('output.txt');

const file = readline.createInterface({
    input: fs.createReadStream("Demoo.txt", "utf8")
});

let finalData = [];

file.on('line', (line) => {
    const words = line.split(',');
    finalData = words.map(word => word.substring(0,1).toUpperCase().concat(word.substring(1)));

    const str = finalData.join();
    writeStream.write(str + '\n');

    // we didn't close the file then it reads all the file line by line
})