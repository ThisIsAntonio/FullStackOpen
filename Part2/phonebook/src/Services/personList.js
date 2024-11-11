import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Show all the persons
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Create a new person object
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}


// Update a new person object (non-implemented on APP yet)
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// Remove a person object
const remove = id => {
    console.log(`Removing person ${id}`)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, remove }