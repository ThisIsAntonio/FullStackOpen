import { useState, useEffect } from 'react'
import countryService from './services/countryServices'
import CountryList from './components/CountryList'
import { Title } from './components/Titles'
import Footer from './components/Footer'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [message, setMessage] = useState('')


  useEffect(() => {
    countryService.getAll().then(data => {
      setCountries(data)
    })
    .catch(error => {
      console.error('Error fetching country data:', error)
      .setMessage('Error fetching country data. Please try again later.')
    })
  }, [])

  useEffect(() => {
    if (search.length > 0) {
      const matches = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
        

      if (matches.length > 10) {
        setMessage('Too many matches, specify another filter')
        setFilteredCountries([])
      } else if (matches.length > 1 && matches.length <= 10) {
        setMessage('')
        setFilteredCountries(matches)
      } else if (matches.length === 1) {
        setMessage('');
        setFilteredCountries(matches)
      } else {
        setMessage('No matches found, please try another search.')
        setFilteredCountries([])
      }
    } else {
      setMessage('')
      setFilteredCountries([])
    }
  }, [search, countries])


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="app-container">
      <Title value={"Country Search"} />
      <div className="content">
        <p>Find Countries:&nbsp;&nbsp;&nbsp;<input value={search} onChange={handleSearchChange} /> </p>
        <CountryList countries={filteredCountries} message={message} />
      </div> 
      <Footer/>
    </div>
  )
}

export default App
