const note = require('./index');
const fs = require('fs');

note.addNote("hey", "joe");

const obj = fs.stat('notes.json');
console.log(obj);