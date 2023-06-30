const express = require("express");
const path = require('path')
const app = express()
const data = require('./db/db.json');

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



//Post db/db.json

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`)
    const { title, text } = req.body;
    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
        };

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting review');
    }
})










app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))