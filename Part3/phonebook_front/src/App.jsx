import { useState, useEffect } from 'react'
import personService from './services/personList'
import Filter from './components/Filter'
import { Title, Subtitle } from './components/Titles'
import Form from './components/Form'
import PersonList from './components/PersonList'
import Debug from './components/Debug'
import Footer from './components/Footer'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [alertMessage, setAlertMessage] = useState()

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

    const nameExist = persons.find((person) => person.name === newName)
    console.log("addPerson", nameExist)

    if (nameExist) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with the new one?`
        )
      ) {
        const updatedPerson = { ...nameExist, number: newNumber }

        personService
          .update(nameExist.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== nameExist.id ? person : returnedPerson
              )
            )
            setAlertMessage({
              message: `Updated the number for ${newName}`,
              type: "success",
            })
            setNewName("")
            setNewNumber("")
            Timing()
          })
          .catch((error) => {
            if (error.response) {
              console.log("Error:", error.response.status)

              if (error.response.status === 400) {
                console.log("Error 400:", error.response.data.error)
                setAlertMessage({
                  message: error.response.data.error,
                  type: "error",
                })
              } else if (error.response.status === 404) {
                setAlertMessage({
                  message: `The person '${nameExist.name}' was already removed from the server`,
                  type: "error",
                })
                setPersons(persons.filter((p) => p.id !== nameExist.id))
              } else {
                setAlertMessage({
                  message: "An unexpected error occurred.",
                  type: "error",
                })
              }
            } else {
              setAlertMessage({
                message: "Unable to connect to the server.",
                type: "error",
              })
            }
            Timing()
          })
      }
    } else {

      const personObject = {
        name: newName,
        number: newNumber,
      }

      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson))
          setAlertMessage({
            message: `The person '${newName}' was added to Phonebook`,
            type: "success",
          })
          setNewName("")
          setNewNumber("")
          Timing()
        })
        .catch((error) => {
          if (error.response && error.response.data.error) {
            setAlertMessage({
              message: error.response.data.error,
              type: "error",
            })
          } else {
            setAlertMessage({
              message: "Unable to connect to the server.",
              type: "error",
            })
          }
          Timing()
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
          setAlertMessage({message: `The person '${person.name}' was successfull removed from server`, type: 'success'})
          Timing()
        })
        .catch(error => {
          setAlertMessage({message: `The person '${person.name}' was removed from server`, type: 'error'})
          console.log('error', error)
          Timing()
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  // Function to set the time to the alert message
  const Timing = () => {
    setTimeout(() => setAlertMessage(null), 5000)
  }

  // Function to set the alert message
  const Notification = ({ alert }) => {
    if (!alert) return null
    const notificationStyle = alert.type === 'success' ? 'notification-success' : 'notification-error'
    return (
      <div className={notificationStyle}>
        {alert.message}
      </div>
    )
  }

  return (
    <div>
      <Title value="Phonebook"/>
      <Notification alert={alertMessage}/>
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
      <Footer />
    </div>
  )
}

export default App