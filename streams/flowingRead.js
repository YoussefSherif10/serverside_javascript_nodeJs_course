const fs = require('fs');

// create readable stream
const readableStream = fs.createReadStream('../fileDemo/notes.json', 'utf8');

/*
// listen to data event and attack a callback
readableStream.on('data', (data) => {
    console.log(data);
});

readableStream.on('end', () => {
   console.log('-------------- end of the data ----------------');
});

 */

/**
 * --------------------- paused -----------------------------------
 * paused stream can be turned into flow by attaching 'data' listener.
 */

let chunk, data = '';
readableStream.on('readable', () => {
    while ((chunk = readableStream.read()) !== null){
        data += chunk;
    }
});

readableStream.on('end', () => {
    console.log(data);
})