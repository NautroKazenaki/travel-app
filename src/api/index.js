import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw, ne) => {
    //making a get request w/ URL based on travel advisor api, and options I got from get endpoint (axios)
    try {
        // I got an object that contains {data: with object {data} that i need to use in my jsx to render}
        // 2nd param is 'options' that uses mine cornerns data
        const { data: { data }} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'd043d3f67bmsh5ab7e98d12fabc3p1b500bjsna5228342596f'
          }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}