export default function Countries({ countries, name, handleShow }) {
  if (name === "") {
    return <div>Search for a country</div>;
  }
  const filteredCountries = countries.filter(
    (country) =>
      country.name &&
      country.name.common.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredCountries.length === 1) {
    return (
      <>
        <h2>{filteredCountries[0].name.common}</h2>
        <br />
        <p>capital {filteredCountries[0].capital}</p>
        <p>area {filteredCountries[0].area}</p>
        <br />
        <h3>languages</h3>
        <ul>
          {Object.values(filteredCountries[0].languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={filteredCountries[0].flags.png} alt="flag" />
      </>
    );
  }
  if (filteredCountries.length === 0) {
    return (
      <>
        <p>No country match</p>
      </>
    );
  }
  return (
    <div>
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another file</p>
      ) : (
        filteredCountries.map((country) => (
          <div key={country.capital}>
            <span key={country.name.common}>{country.name.common}</span>
            <button key={country.area} onClick={() => handleShow(country)}>
              show
            </button>
          </div>
        ))
      )}
    </div>
  );
}
