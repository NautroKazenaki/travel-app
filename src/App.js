import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    //hook that will make state filled w/ restaraunts
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    //hook that set state of  corners's coordinates
    const [bounds, setBounds] = useState({});
    //hook to get my coordinates
    useEffect( () => {
        navigator.geolocation.getCurrentPosition( ({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, [])
    //hook that will get restaraunts when we start an application
    useEffect( () => {
        getPlacesData(bounds.sw, bounds.ne)
            .then( (data) => {
                setPlaces(data);
            })
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={ {width: '100%'} }>
                <Grid item xs={12} md={4}>
                    <List 
                        places={places} 
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>

        </>
    );
}
export default App;