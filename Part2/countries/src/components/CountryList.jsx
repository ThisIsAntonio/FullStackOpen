// components/CountryList.jsx
const CountryList = ({ countries, message }) => {
    if (message) {
        return <p>{message}</p>
    }

    if (countries.length === 1) {
    const country = countries[0]
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="200" />
        </div>
    );
    }

    return (
        <ul>
        {countries.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
        ))}
        </ul>
    );
};

export default CountryList