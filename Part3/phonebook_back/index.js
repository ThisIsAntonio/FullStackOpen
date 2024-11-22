const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

// Register tokens for Morgan
morgan.token('body', (request) => {
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
    return ''
})


// Use morgan 'tiny' token
app.use(morgan('tiny'))

// Use personalized morgan token
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// Persons MAP
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
    },
    { 
        "id": 5,
        "name": "Marcos Astudillo", 
        "number": "613-1112233"
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


// REST API Persons

// Showing list of people
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// Showing one person
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// Remove one person
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

// Post new person
app.post('/api/persons', (request, response) => {
    const body = request.body
        if (!body.name || !body.number) {
            return response.status(400).json({
                error: 'name or number missing'
            })
        } else if (persons.find(person => person.name === body.name)) {
            return response.status(400).json({
                error: 'name must be unique'
            })
        }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(person)
})

// create a new random ID
const generateId = () => {
    return Math.floor(Math.random() * 1000000000)
}

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
