import React from 'react';
import GoogleMapReact from 'google-map-react';
//map tools  + mobile
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
//Rating component, from lab cuz it still working on
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import mapStyles from './mapStyles'


const Map = ( {setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
    const classes = useStyles();
    //const says 'false' if device screen >600px
    const isDesktop = useMediaQuery('(min-width: 600px)');
    
    
    return (
        /*
            1.container => 
                1.1 Google map w/ attributes like: g.keys + coordinates + zoom and few...
                1.2 .map places to div w/ their markers
                1.2.1 if isDesktop = true -> show icons on the map
                1.2.2 if isDesktop = false -> show div w/ background which contain place name and expiremental func rating()
            
        */
        <div className={classes.mapContainer}>
            <GoogleMapReact
                //console.cloud.google.com/projectcreate => project name => dashboard => search for that u need => enable => credetials => new => keys
                bootstrapURLKeys={ {key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY} }
                //center of the map
                defaultCenter={coordinates}
                //real center
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                //change map
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                //while map coordinates are changing, we set coordinates from event inforamation
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                //when click at any object on the map
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map( (place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutLinedIcon color='primary' fontSize='large'/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://brendinstrument.ru/image/cache/no_image-1280x960.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
                {weatherData?.list?.length && weatherData.list.map( (data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt="test" />
                    </div>
                ))}
                
            </GoogleMapReact>
        </div>
        
    )
}
export default Map