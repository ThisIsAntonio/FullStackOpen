import { useState } from "react"
import { Subtitle, Subtitle2 } from "./Titles"


// Function to show the country Information
const CountryInfo = ({country}) => {
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
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="200" />
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