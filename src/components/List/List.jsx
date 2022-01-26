import React, {useState} from 'react'
//material ui loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = ({places}) => {
    const classes = useStyles()
    const [type, setType] = useState('restaraunts')
    const [rating, setRating] = useState('')

    

    return (
        /*container => label =>
        1.(1st form w/ name 'type' + select menu => menu items) + 
        2.(2nd form w/ name 'rating' + select menu => menu items) + 
        3. grid that contain list of places and if we have some (look {places?}) we map every place to grid type = item which is a card w/ information 'bout the place*/
        <div className={classes.container}>
            <Typography variant='h4'>
                Restaraunts, Hotels and Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel> Type </InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaraunts"> Restaraunts </MenuItem>
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
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>  
                ))}
            </Grid>
        </div>
    )
}
export default List