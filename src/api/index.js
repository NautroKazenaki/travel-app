import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

var options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'd043d3f67bmsh5ab7e98d12fabc3p1b500bjsna5228342596f'
  }
};



export const getPlacesData = async () => {
    //making a get request w/ URL based on travel advisor api, and options I got from get endpoint (axios)
    try {
        // I got an object that contains {data: with object {data} that i need to use in my jsx to render}
        const { data: { data }} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
}