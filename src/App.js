import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid} from '@material-ui/core';

import {getPlacesData} from './api/index'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    //hook that will make state filled w/ restaraunts
    const [places, setPlaces] = useState([])
    //hook that will get restaraunts when we start an application
    useEffect( () => {
        getPlacesData()
            .then( (data) => {
                console.log(data)
                setPlaces(data)
            })
    }, [])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={ {width: '100%'} }>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>

        </>
    );
}
export default App;