//requiring module and created file
const fs = require('fs')
const getNotes = require('./notes.js');

//to access/call function from another file

const theNote = getNotes();
console.log(theNote)










//fs.writeFileSync('notes.txt', 'working with file system with Abdulmueez')
//fs.appendFileSync('notes.txt', 'working with file system with AlLegacy')