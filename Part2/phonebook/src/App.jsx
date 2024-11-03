import { useState } from 'react'

// Function to display the person
const Person = ({ person }) => <li>{person.name} {person.number}</li>

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
  const handleFilter = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
  }

  // Function to handle the name
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  // Function to handle the number
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

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
      <h2>Phonebook</h2>
      <hr/>
      <h3>Filter</h3>
      <div>
        Filter: <input value={filter} onChange={handleFilter}/>
      </div>
      <br/>
      <hr/>
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <br/>
      <div>Debug Name: {newName}</div>
      <div>Debug Phone Number: {newNumber}</div>
      <br/>
      <hr/>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map(person => <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App