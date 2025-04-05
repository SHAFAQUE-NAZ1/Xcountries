import './App.css';
import Countries from './components/Countries';
import { useEffect, useState } from 'react';

function App() {
  const [countryData, setCountryData] = useState([]);
  const [allCountries, setAllCountries] = useState([]); // To store the original data

  useEffect(() => {
    const getCountriesFlag = async () => {
      try {
        const res = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await res.json();
        setCountryData(data);
        console.log(data,"Fetched Data");
        setAllCountries(data); // Store the full data for reset
      } catch (error) {
        console.error("Error fetching data:", error); // Log error to console
      }
    };
    getCountriesFlag();
  }, []);


  
  
  return (
    <div>
      <div className='input-box'>
     
         
      </div>
      <div className="App">
        {countryData.map((Data) => {
          return <Countries Data={Data} key={Data.abbr} />;
        })}
      </div>
    </div>
  );
}

export default App;