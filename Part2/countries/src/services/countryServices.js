import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

// Show all the countries
const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getCountriesByName = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`);
    return request.then(response => response.data);
}


export default { getAll, getCountriesByName }