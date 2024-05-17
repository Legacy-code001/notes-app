const fs = require('fs')

const getNotes = function(){
    return 'your notes...'
}

const addNotes = function(title, body){

    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })
    console.log(notes)
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
    

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes

}