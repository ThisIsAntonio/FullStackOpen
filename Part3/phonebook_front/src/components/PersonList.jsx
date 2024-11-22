import Person from './Person'

const PersonList = ({ persons, deletePerson }) => {
    return (
        <ul>
            {persons.map(person => 
            <Person 
                key={person.id} 
                person={person} 
                deletePerson={deletePerson}/>)}
        </ul>
    )
}

export default PersonList