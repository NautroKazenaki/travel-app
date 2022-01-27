import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    //hook that will make state filled w/ restaraunts
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [childClicked, setChildClicked] = useState(null);
    const [weatherData, setWeatherData] = useState([])

    const [coordinates, setCoordinates] = useState({});
    //hook that set state of  corners's coordinates
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    //hook to get my coordinates
    useEffect( () => {
        navigator.geolocation.getCurrentPosition( ({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, []);
    //hook for filter places by Rating
    useEffect( () => {
        const filteredPlaces = places.filter( (place) => place.rating > rating)

        setFilteredPlaces(filteredPlaces)
    }, [rating])
    /*hook that will get restaraunts when we start an application
        1. if we got corners of map 
        2. set Loading true
        3. do async func to get actual weather in the place
        3. do async func w/ params type of place and our bounds
        4. after we got response 
        4.1 filter the data cuz we don't need empty places
        4.2 set filtered places
        4.3 turn off loader
        5. [depend on type of place and bounds]
    */
    useEffect( () => {
        if (bounds.sw && bounds.ne) {
        setIsLoading(true);
        getWeatherData(coordinates.lat, coordinates.lng)
            .then( (data) => setWeatherData(data) );
        getPlacesData(type, bounds.sw, bounds.ne)
            .then( (data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFilteredPlaces([])
                setIsLoading(false);
            })
        }
    }, [type,  bounds]);

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={ {width: '100%'} }>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>

        </>
    );
}
export default App;