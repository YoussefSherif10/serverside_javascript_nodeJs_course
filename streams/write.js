const fs = require('fs');

const rs = fs.createReadStream('../fileDemo/notes.json', 'utf8');
const ws = fs.createWriteStream('Demoo.txt');

rs.on('data', (data) => {
    ws.write(data);
})

rs.on('end', () => {
    console.log('copied');
})

console.log("the copy is : ");

const reading = fs.createReadStream('Demoo.txt', "utf8");

reading.on('data', (data) => {
    console.log(data);
})

