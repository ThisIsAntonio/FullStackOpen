const express = require('express')
const app = express()

persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

// Showing Title
app.get('/', (request, response) => {
    response.send('<h1>Persons API</h1>')
})

// Showing info about the current phonebook and datetime of the requested
app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`
        </br>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>`)
})


// Showing list of people
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})