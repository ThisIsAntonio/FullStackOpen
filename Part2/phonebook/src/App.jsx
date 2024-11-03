import { useState } from 'react'
import Filter  from './components/Filter'
import { Title, Subtitle } from './components/Titles'
import Form from './components/Form'
import PersonList from './components/PersonList'
import Debug from './components/Debug'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Function to handle the filter
  const handleFilter = (event) =>setFilter(event.target.value)

  // Function to handle the name
  const handleNameChange = (event) => setNewName(event.target.value)

  // Function to handle the number
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  // Function to filter the person based on the name
  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  // Function to add the person
  const addPerson = (event) => {
    event.preventDefault()

    // Check if the person already exist
    const nameExist = persons.some(person => person.name === newName)
    if (nameExist) {
      // Show the alert if the person already exist
      alert(`${newName} is already added to phonebook`)
    } else{

      // Add the person
      const personObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <Title value="Phonebook"/>
      <hr/>
      <Subtitle value="Search"/>
      <Filter value={filter} onChange={handleFilter}/>
      <br/>
      <hr/>
      <Subtitle value="Add a new"/>
      <Form onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <br/>
      <Debug newName={newName} newNumber={newNumber} />
      <br/>
      <hr/>
      <Subtitle value="Numbers"/>
      <PersonList persons={personsToShow}/>
    </div>
  )
}

export default App