const chalk = require('chalk')
const fs = require('fs')
const { title } = require('process')

const getNotes = function(){
    return 'your notes...'
}

const addNotes = function(title, body){

    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
   }catch (e) {

   return []

   }

}

const removeNote = function(title){
    console.log(title)
    const notes = loadNotes()

    
        const keepNotes = notes.filter(function(note){
            return note.title !== title
        })

        if(notes.length > keepNotes.length){
            saveNotes(keepNotes)
            console.log(chalk.green.inverse(' note removed!'))
        }else {

        console.log(chalk.blue.inverse(' no note removed!'))

    }

    
    
}
        
    

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote

}