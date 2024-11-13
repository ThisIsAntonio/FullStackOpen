import { useState, useEffect } from "react"
import { Subtitle, Subtitle2 } from "./Titles"


// Function to show the country Information
const CountryInfo = ({country}) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const capital = country.capital[0]

    // Checking weather API, adding the capital information to show on the country info
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching weather data:', error))
    }, [capital, api_key])

    return (
        <div>
            <Subtitle value={country.name.common} />
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <Subtitle2 value={"Languages:"} />
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <br/>
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="200" />
            <br/>
            {weather && (
                <div>
                    <Subtitle2 value={`Wheater in: ${capital}`} />
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                    {weather.weather[0] && (
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                    )}
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}

// Function to show the country list
const CountryList = ({ countries, message }) => {
    const [selectedCountry, setSelectedCountry] = useState(null); // Estado para el país seleccionado

    const showCountryInfo = (country) => {
        setSelectedCountry(country)

        setTimeout(() => {
            setSelectedCountry(null)
        }, 5000)
    }

    if (message) {
        return <p>{message}</p>
    }

    if (countries.length === 1) {
        const country = countries[0]
        return <CountryInfo country={country} />
    }

    return (
        <ul>
            {countries.map(country => (
                <li key={country.cca3}>
                    {country.name.common} 
                    <button onClick={() => showCountryInfo(country)}>Show</button>
                    {selectedCountry && selectedCountry.cca3 === country.cca3 && (
                            <CountryInfo country={selectedCountry} />
                        )}
                </li>
            ))}
        </ul>
    )
}

export default CountryList;