import weatherService from "./services/weather";
export default function Countries({ countries, name, handleShow }) {
  const api_key = import.meta.env.VITE_SOME_KEY;

  if (name === "") {
    return <div>Search for a country</div>;
  }
  const filteredCountries = countries.filter(
    (country) =>
      country.name &&
      country.name.common.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredCountries.length === 1) {
    weatherService
      .getWeather(
        filteredCountries[0].latlng[0],
        filteredCountries[0].latlng[1]
      )
      .then((response) => {
        console.log(response);
        filteredCountries[0].temperature = response.main.temp;
        filteredCountries[0].wind = response.wind.speed;
        filteredCountries[0].icon = response.weather[0].icon;
        filteredCountries[0].id = response.weather[0].id;
      });
    console.log(filteredCountries[0]);
    const iconURL = `http://openweathermap.org/img/wn/${filteredCountries[0].icon}@2x.png`;
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
        <h3>Weather in {filteredCountries[0].capital}</h3>
        <p>temperature: {Math.round(filteredCountries[0].temperature - 273)}</p>
        <img src={iconURL} alt="weather" />
        <p>wind: {filteredCountries[0].wind}</p>
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
