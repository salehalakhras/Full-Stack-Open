import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/Country';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountry, setShowCountry] = useState();

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all/')
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      
  }, []);

  useEffect(() => {
    setFilteredCountries(countries.filter(filteredCountry => {
      return filteredCountry.name.common.toLowerCase().includes(filterInput.toString().toLowerCase());
    }));

    if (showCountry != 0)
      setShowCountry(null);


  }, [filterInput])

  const handleFilterInputChange = (event) => {
    setFilterInput(event.target.value);
  }

  const handleShowCountry = (index) => {
    setShowCountry(index);
  }

  return (
    <div>
      Search for countries <input value={filterInput} onChange={handleFilterInputChange}></input>
      <ul>
        {filteredCountries.length == 1 ? (
          <Country country={filteredCountries[0]}></Country>)
          :
          filteredCountries.length <= 10 ? filteredCountries.map((country, index) => {
            if(showCountry !== null && showCountry === index) 
              return <Country country={country}></Country>
            else
              return (<>
              <li key={country.name.common} >{country.name.common}</li>
              <button onClick={() => handleShowCountry(index)}>Show</button>
              </>)
          })
            :
            <p>Too many matches specify another filter</p>}
      </ul>
    </div>
  )
}
export default App;

