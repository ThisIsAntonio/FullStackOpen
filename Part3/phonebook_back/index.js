require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Persons = require('./models/phonebook')
const app = express()
const mongoose = require('mongoose')

// Register tokens for Morgan
morgan.token('body', (request) => {
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
    return ''
})

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

// MIDDLEWARE
//Cors
app.use(cors())

//Body-parser
app.use(express.json())

//Static files from public folder
app.use(express.static('dist'))

// Use morgan 'tiny' token
app.use(morgan('tiny'))

// Request logger middleware
app.use(requestLogger)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// Use personalized morgan token
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// Persons MAP
// persons = [
//     { 
//         "id": 1,
//         "name": "Arto Hellas", 
//         "number": "040-123456"
//     },
//     { 
//         "id": 2,
//         "name": "Ada Lovelace", 
//         "number": "39-44-5323523"
//     },
//     { 
//         "id": 3,
//         "name": "Dan Abramov", 
//         "number": "12-43-234345"
//     },
//     { 
//         "id": 4,
//         "name": "Mary Poppendieck", 
//         "number": "39-23-6423122"
//     },
//     { 
//         "id": 5,
//         "name": "Marcos Astudillo", 
//         "number": "613-1112233"
//     }
// ]

// Showing Title
app.get('/', (request, response) => {
    response.send('<h1>Persons API</h1>')
})

// Showing info about the current phonebook and datetime of the requested
app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`
        </br>
        <p>Phonebook has info for ${Persons.length} people</p>
        <p>${date}</p>`)
})

// REST API Persons

// Showing list of people
app.get('/api/persons', (request, response) => {
    Persons.find({}).then((persons) => {
        response.json(persons) 
    })
})

// Showing one person
app.get('/api/persons/:id', (request, response) => {
    Persons.findById(request.params.id).then(person => {
        response.json(person)
    })
})

// Post new person
app.post('/api/persons', (request, response) => {
    const body = request.body
    const personFind = Persons.find( { name: body.name } )

    if (!body.name || !body.number) {
        return response.status(400).json({
                error: 'name or number missing'
        })
    }
    // } else if (persons.find(person => person.name === body.name)) {
    //     return response.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }
    const person = new Persons({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

// Temporary handler for PUT requests
app.put('/api/persons/:id', (request, response) => {
    console.log('PUT request received')
    console.log('ID:', request.params.id)
    console.log('Body:', request.body)
    console.log('PUT method not implemented yet')
    response.status(501).json({ error: 'PUT method not implemented yet' })
})

// Remove one person
app.delete('/api/persons/:id', (request, response) => {
    Persons.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
})

app.use(unknownEndpoint)

// Implement later UPDATE method
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
