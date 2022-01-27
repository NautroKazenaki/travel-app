import React, {useState, useEffect, createRef} from 'react'
//material ui loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
    const classes = useStyles();
    
    const [elRefs, setElRefs] = useState([]);

    useEffect( () => {
        //create array => fill it => map it w/ useless 1 param to get refs or create a new one
        const refs = Array(places?.length).fill().map( (_, i) => elRefs[i] || createRef());
        

        setElRefs(refs);
    }, [places]);

    return (
        /*container => label =>
        if isLoading = true -> loaderShow else -> show content
        1.(1st form w/ name 'type' + select menu => menu items) + 
        2.(2nd form w/ name 'rating' + select menu => menu items) + 
        3. grid that contain list of places and if we have some (look {places?}) we map every place to grid type = item which is a card w/ information 'bout the place*/
        <div className={classes.container}>
            <Typography variant='h4'> Restaurants, Hotels and Attractions around you </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size='5rem' />
                </div>
            ) : (
                <>
            <FormControl className={classes.formControl}>
                <InputLabel> Type </InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants"> Restaurants </MenuItem>
                    <MenuItem value="hotels"> Hotels </MenuItem>
                    <MenuItem value="attractions"> Attractions </MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel> Rating </InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}> All </MenuItem>
                    <MenuItem value={3}> Above 3.0 stars </MenuItem>
                    <MenuItem value={4}> Above 4.0 stars </MenuItem>
                    <MenuItem value={4.5}> Above 4.5 stars </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map( (place, i) => (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected={Number(childClicked) === i}
                            refProp={elRefs[i]}
                        />
                    </Grid>  
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}
export default List