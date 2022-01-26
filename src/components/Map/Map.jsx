import React from 'react';
import GoogleMapReact from 'google-map-react';
//map tools  + mobile
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined'
//Rating component, from lab cuz it still working on
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    //const says 'false' if device screen >600px
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = { lat: 0, lng: 0};

    return (
        //container => Google map w/ attributes like: g.keys + coordinates + zoom and few...
        <div className={classes.mapContainer}>
            <GoogleMapReact
                //console.cloud.google.com/projectcreate => project name => dashboard => search for that u need => enable => credetials => new => keys
                bootstrapURLKeys={ {key: 'AIzaSyDE7LBTRLHs4r87c4aTXm8B6eoOwaMIndQ'} }
                //center of the map
                defaultCenter={coordinates}
                //real center
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                //when click at any object on the map
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}
export default Map