import axios from 'axios'





export const getPlacesData = async (type, sw, ne) => {
    //making a get request w/ URL based on travel advisor api, and options I got from get endpoint (axios)
    try {
        // I got an object that contains {data: with object {data} that i need to use in my jsx to render}
        // 2nd param is 'options' that uses mine cornerns data
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY
          }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
      const {data} = await axios.get( 'https://community-open-weather-map.p.rapidapi.com/weather',{
        params: {lat: lat, lon: lng},
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY
        }
      } )
      return data;
  } catch (error) {
      console.log(error)
  }
}