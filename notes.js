const chalk = require('chalk')
const fs = require('fs')



const addNotes = (title, body) => {

    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)
    

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('adding new notes...')

    }else {
        console.log('duplicate note exist')
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
   }catch (e) {

   return []

   }

}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()

    
        const keepNotes = notes.filter((note) => note.title !== title)

        if(notes.length > keepNotes.length){
            saveNotes(keepNotes)
            console.log(chalk.green.inverse(' note removed!'))
        }else {

        console.log(chalk.blue.inverse(' no note removed!'))

    }

    
    
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.blue.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNotes = (title) => {

    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

        if(note) {
            console.log(chalk.inverse(note.title))
            console.log(note.body)
    
        }else {
            console.log(chalk.red.inverse('error'))
        }
        
    
  

}
        
    

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

}