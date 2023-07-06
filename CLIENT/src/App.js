import './App.css';
import React, { useEffect } from 'react';

// COMPONENTS
import Header from './components/shared/Header'
import UserInput from './components/UserInput';


function App() {
  
  // user submits input form
  const handleCitySubmit = (cityInput) => {
    console.log(cityInput)
  };
  return (
    <div className="App">
      <Header />
     <h1>Weatheroo</h1>
    <UserInput onSubmit={handleCitySubmit}/>
    </div>
  );
}

export default App;
