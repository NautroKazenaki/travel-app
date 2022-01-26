import React from 'react';
import GoogleMapReact from 'google-map-react';
//map tools  + mobile
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOutLinedIcon from '@material-ui/icons/LocationOutlined'
//Rating component, from lab cuz it still working on
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    //const says 'false' if device screen >600px
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = { lat: 0, lng: 0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={ {key: ''} }
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