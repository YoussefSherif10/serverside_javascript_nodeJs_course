const fs = require('fs');

const loadNotes = () => {
    const buffer = fs.readFileSync('notes.json');
    const datastr = buffer.toString();

    const obj = JSON.parse(datastr);
    return obj;
}

const addNote = (title, author) => {
    const notes = loadNotes();

    const duplicates = notes.filter(note => note.title === title);
    if (!duplicates.length)
        notes.push({
            title: title,
            author: author
        })
    else
        console.log('note title is already taken');

    saveNotes(notes);
}

const saveNotes = (notes) => {
     const datastr = JSON.stringify(notes);
     fs.writeFileSync('notes.json', datastr);
}

const getAllNotes = () => {
    const data = loadNotes();
    data.forEach(note => {console.log(note.title)});
}

const getNote = (title) => {
    const notes = loadNotes();
    let note = notes.find(n => n.title === title);
    if (note)
        return console.log(note);
    console.log('note not found');
}

const removeNote = (title) => {
    let notes = loadNotes();
    let index = notes.findIndex(n => n.title === title);
    if (index !== -1) {
        const n = notes.splice(index, 1);
        return saveNotes(n);
    }
    console.log('Note not found');
}

module.exports = {getAllNotes, addNote, getNote, removeNote};