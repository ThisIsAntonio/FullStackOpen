import { useState, useEffect } from 'react'
import personService from './services/personList'
import Filter from './components/Filter'
import { Title, Subtitle } from './components/Titles'
import Form from './components/Form'
import PersonList from './components/PersonList'
import Debug from './components/Debug'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Function hook for add json db
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

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
    const nameExist = persons.find(person => person.name === newName);

    if (nameExist) {
        // Show the alert if the person already exist
        if (window.confirm(`${newName} is already in the phonebook, replace the old number with the new one?`)) {
          const updatedPerson = { ...nameExist, number: newNumber };
          
          // Llama a la función para actualizar el número en el servidor
          personService
            .update(nameExist.id, updatedPerson)
            .then(returnedPerson => {
              // Actualiza la lista localmente
              setPersons(persons.map(person => person.id !== nameExist.id ? person : returnedPerson));
              setNewName('');
              setNewNumber('');
            })
            .catch(error => {
              alert(error + `, The person '${nameExist.name}' was already removed from server`);
              setPersons(persons.filter(p => p.id !== nameExist.id));
            });
        }
      } else{

        // Add the person
        const personObject = {
          name: newName,
          number: newNumber
        }

        personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
        })
    }
  }

  // Function to delete the person
  const deletePersons = id => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(error + `, The person '${person.name}' was removed from server`)
          setPersons(persons.filter(p => p.id !== id))
        })
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
      <PersonList persons={personsToShow} deletePerson={deletePersons}/>
    </div>
  )
}

export default App