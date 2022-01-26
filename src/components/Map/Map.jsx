import React from 'react';
import GoogleMapReact from 'google-map-react';
//map tools  + mobile
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
//Rating component, from lab cuz it still working on
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ( {setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    //const says 'false' if device screen >600px
    const isMobile = useMediaQuery('(min-width: 600px)');
    return (
        //container => Google map w/ attributes like: g.keys + coordinates + zoom and few...
        <div className={classes.mapContainer}>
            <GoogleMapReact
                //console.cloud.google.com/projectcreate => project name => dashboard => search for that u need => enable => credetials => new => keys
                bootstrapURLKeys={ {key: 'AIzaSyDZvGZFhn46MVQnD7g0sj28L8nq5gY4ejQ'} }
                //center of the map
                defaultCenter={coordinates}
                //real center
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                //while map coordinates are changing, we set coordinates from event inforamation
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                //when click at any object on the map
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}
export default Map