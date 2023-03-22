const event = require('events');
const fs = require('fs');

/*
const ee = new event.EventEmitter();

ee.once('m', () => {
    console.log('user');
});

ee.on('m', () => {
    console.log('sherif');
});

ee.emit('m');
ee.emit('m');
 */

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener('update', () => {
    console.log('update invoked');
});

fs.writeFileSync('demo.txt', "Hello, World!");

const readSteam = fs.createReadStream('demo.txt', 'utf8');
readSteam.on('data', (data) => {
    eventEmitter.emit('update');
    console.log(data);
})