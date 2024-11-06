const Form = ({onSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <br/>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <br/>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form