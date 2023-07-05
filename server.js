const express = require("express");
const fs = require('fs')
const path = require('path')
const app = express()
const data = require('./db/db');
const { log } = require("console");
const uuid = require('uuid')
// import { v4 as uuidv4} from 'uuid';

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = 3000

//render Index.html
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public/index.html')) })

//render notes.html
app.get('/notes', (req, res) => { res.sendFile(path.join(__dirname, 'public/notes.html')) })

//Get db/db.json
app.get('/api/notes', (req, res) => res.json(data));

//Get Original Notes and add new obejct to it
function saveToNotefile(arrayObject) {
    data.push(...arrayObject)
    const newNoteFile = JSON.stringify(data)
    fs.writeFileSync('./db/db.json', newNoteFile)
    return;
}

function deleteFromNoteFile(arrayObject){
    const newNoteFile = JSON.stringify(arrayObject)
    fs.writeFileSync('./db/db.json', newNoteFile)
    return;
}

//Post db/db.json

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`)
    const { title, text } = req.body;
    const id = uuid.v4() 
    if (title && text) {
        const newNote = {
            title,
            text,
            id,
        };

        const response = {
            status: 'success',
            body: newNote,
        };
        saveToNotefile([newNote])
        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting note');
    }
})

app.delete('/api/notes/:id', (req,res)=> {
    const {id} = req.params
    console.info(`${req.method} request received to add a note`)
    const newdata = data.filter(e => {
            return e.id == id ?  false: true        
    })
    deleteFromNoteFile(newdata)
    res.status(201).json(newdata)
    // res.status(201).send("Deleted successfully")
})




app.listen(PORT, (err) =>{
    err ? console.log(err) :
    console.log(`Example app listening at http://localhost:${PORT}`)
})
