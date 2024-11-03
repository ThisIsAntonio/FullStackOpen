import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' , id: 1}]) 
  const [newName, setNewName] = useState('')
  const Person = ({ person }) => {<li>{person.name}</li>}

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <br/>
      <div>Debug: {newName}</div>
      <br/>
      <hr/>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} person={person} />)}
      </ul>
    </div>
  )
}

export default App