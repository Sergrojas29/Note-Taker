const data = require('./db/db.json')
const fs = require('fs')

const testObject = [
  {
    title: "Test Title",
    text: "Test text"
  },
  {
    title: "New Title",
    text: "New Text"
  },
  {
    title: "New Note",
    text: "To take note"
  },
  {
    title: "More Notes",
    text: "Hello More notes"
  },
  {
    title: "Test New",
    text: "MOORRRe"
  }
]


function deleteFromNoteFile(arrayObject){
    const newNoteFile = JSON.stringify(arrayObject)
    fs.writeFileSync('./db/test.json', newNoteFile)
    return;
}

deleteFromNoteFile(testObject)

// const testdata = {"title":"New Note","text":"To take note"}

// const newdata = data.filter(e => checkForInObject(e, testdata))


// function checkForInObject(object, resObject){
//     const {title, text} = resObject
//     return object.title == title && object.text == text ?  false: true
// }

