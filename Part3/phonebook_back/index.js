require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Persons = require('./models/phonebook')
const app = express()
const mongoose = require('mongoose')

// Morgan's Middleware
morgan.token('body', (request) => {
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
    return ''
})

// Logger
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use(morgan('tiny'))
app.use(requestLogger)

// Use personalized morgan token
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// REST API phonebook information
// Showing Title
app.get('/', (request, response) => {
    response.send('<h1>Persons API</h1>')
})

// Showing info about the current phonebook and datetime of the requested
app.get('/info', (request, response, next) => {
    const date = new Date()
    Persons.countDocuments({})
    .then((count) => {
        console.log(`Phonebook has info for ${count} people`)
        response.send(`
            </br>
            <p>Phonebook has info for ${count} people</p>
            <p>${date}</p>`
        )
    })
    .catch(err => next(err))
})

// Showing list of people
app.get('/api/persons', (request, response, next) => {
    Persons.find({})
        .then((persons) => {
            response.json(persons) 
        })
        .catch(err => next(err))
})

// Showing one person
app.get('/api/persons/:id', (request, response, next) => {
    Persons.findById(request.params.id)
        .then(person => {
            response.json(person)
        })
        .catch(err => next(err))
})

// Post new person
app.post('/api/persons', (request, response, next) => {
    const {name, number} = request.body

    Persons.findOne({ name })
    .then(existingPerson => {
        if (existingPerson) {
            return response.status(400).json({
                error: 'name must be unique'
            })
        }

        const person = new Persons({
            name: name,
            number: number
        })

        person.save()
            .then(savedPerson => {
                response.json(savedPerson)
            })
            .catch(error => next(error))
    })
    .catch(err => next(err))
})

// PUT request
app.put('/api/persons/:id', (request, response, next) => {
    const { name, number } = request.body

    Persons.findById(request.params.id)
        .then((person) => {
            if (!person) {
                return response.status(404).json({
                    error: 'person not found',
                })
            }

            // Check if the same data is already present
            if (person.name === name && person.number === number) {
                console.log('No update needed: same data')
                return response.status(400).json({
                    error: `The person "${name}" already has the number "${number}" associated.`,
                })
            }

            const updatedPerson = {
                name: name,
                number: number,
            }

            return Persons.findByIdAndUpdate(
                request.params.id,
                updatedPerson, 
                { new: true, runValidators: true, context: 'query' })
                .then(updatedPerson => {
                    if (!updatedPerson) {
                        return response.status(404).json({
                            error: 'Failed to update. Person not found.',
                        })
                    }
                    response.json(updatedPerson)
                })
                .catch((error) => next(error))
        })
        .catch(err => next(err))
})

// Remove one person
app.delete('/api/persons/:id', (request, response, next ) => {
    Persons.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(err => next(err))
})

// Middleware for unkown requests
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

// Middleware for error handlers
const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'Malformatted ID' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
};
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
