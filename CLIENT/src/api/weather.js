const axios = require('axios')

const weather = async(query) =>{
  const axios = require('axios')

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: query},
    headers: {
      'X-RapidAPI-Key': '687ce345e8msh4527dea48c7421ap1fd768jsn5831cc069d3d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }
  
  try {
    const response = await axios.request(options)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

weather('jersey city')