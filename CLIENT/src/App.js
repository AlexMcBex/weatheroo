import './App.css'
import React, { useState, useEffect } from 'react'

// COMPONENTS
import Header from './components/shared/Header'
import UserInput from './components/UserInput';
import Weather from './components/Weather';



const  App =()=> {
  document.title = 'Weatheroo'
  // city state => communicating between components
  const [city, setCity] = useState('')


  // user submits input form
  const handleCitySubmit = (cityInput) => {
    setCity(cityInput)
  }

  useEffect(() => {
    console.log('user search:', city)
  }, [city])

  return (
    <div className="App">
      <Header />
     <h1>Weatheroo</h1>
    <UserInput onSubmit={handleCitySubmit}/>
    <Weather city={city}/>
    </div>
  );
}

export default App;
