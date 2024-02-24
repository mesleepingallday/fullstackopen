import { useEffect, useState } from "react";
import countriesServices from "./services/countries";
import Countries from "./Countries";
function App() {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesServices.getAll().then((response) => {
      console.log(response);
      setCountries(response);
    });
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleShow = (country) => {
    const showCountry = [country];
    setCountries(showCountry);
  };
  return (
    <>
      <div>
        find countries{" "}
        <input type="text" value={name} onChange={handleChange} />
      </div>
      <Countries countries={countries} name={name} handleShow={handleShow} />
    </>
  );
}

export default App;
