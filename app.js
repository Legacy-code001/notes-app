//requiring module and created fi
const chalk = require('chalk')
const getNotes = require('./notes.js');

//to access/call function from another file

const theNote = getNotes();
console.log(theNote)
const printMessage = chalk.blue.inverse.bold('Alhamdulillah')
console.log(printMessage)










//fs.writeFileSync('notes.txt', 'working with file system with Abdulmueez')
//fs.appendFileSync('notes.txt', 'working with file system with AlLegacy')