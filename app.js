//requiring module and created fi
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

//to access/call function from another file

//const theNote = notes();
//console.log(theNote)
//const printMessage = chalk.blue.inverse.bold('Alhamdulillah')
//console.log(printMessage)

//console.log(process.argv)

//console.log(process.argv[2])

const info = process.argv[2]
if(info === 'add') {
    //console.log('Adding notes') 
}else if(info === 'remove'){
    //console.log('Removing notes') 



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Displaying the needed title',
            demandOption: true,
            type: 'string'

        },
        body : {
            describe: 'Details about the note',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove the added note',
    builder: {
        title: {
            describe: 'removing the needed title',
            demandOption: true,
            type: 'string'

        },
    },
    handler(argv){
      notes.removeNote(argv.title)
       //console.log('title: some title')
    }
})

yargs.command({
    command: 'list',
    describe: 'list the available notes',
    handler(){
        notes.listNotes()
    }
        
    
})

yargs.command({
    command: 'read',
    describe: 'read the selected note',
    builder: {
        title: {
            describe: 'reading the  title',
            demandOption: true,
            type: 'string'

        },
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()










//fs.writeFileSync('notes.txt', 'working with file system with Abdulmueez')
//fs.appendFileSync('notes.txt', 'working with file system with AlLegacy')