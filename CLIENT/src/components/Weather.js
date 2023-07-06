// DEPENDENCIES
import { useEffect, useState } from 'react'
import axios from 'axios'
// COMPONENT => Display city weather
const Weather = ({ city }) =>{
  //  state: weather info
  const [weatherInfo, setWeatherInfo] = useState(null)

  // set the city for the axios get
  useEffect(() => {
    const axiosWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://weatherapi-com.p.rapidapi.com/current.json',
          {
            params: { q: city },
            headers: {
              'X-RapidAPI-Key': '687ce345e8msh4527dea48c7421ap1fd768jsn5831cc069d3d',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            },
          }
        )
        setWeatherInfo(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
        console.log('NO API WORKING')
        setWeatherInfo(null)
      }
    }

    if (city) {
      axiosWeatherData()
    }
  }, [city]
  )

  return(
    <div>
    {weatherInfo ? (
      <h2>Weather for <span className='city'>{city} </span>Available</h2>
    ):(
      <h2>Enter the name of a city</h2>
    )}
    </div>
  )
}

export default Weather


// const weather = async(query) =>{
//   const axios = require('axios')

//   const options = {
//     method: 'GET',
//     url: 'https://weatherapi-com.p.rapidapi.com/current.json',
//     params: {q: query},
    // headers: {
    //   'X-RapidAPI-Key': '687ce345e8msh4527dea48c7421ap1fd768jsn5831cc069d3d',
    //   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    // }
//   }
  
//   try {
//     const response = await axios.request(options)
//     console.log(response.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// weather('jersey city')