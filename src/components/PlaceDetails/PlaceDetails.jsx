import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyle from './styles'
//props from List component
const PlaceDetails = ({place}) => {
    const classes = useStyle()
    return (
        /*card w/ shadow effect => 
        1. cardMedia (attr: height of card + image of place + title of image) +
        2. CardContent => 
            2.1 Typography w/ big margin-bottom which contain place name
            2.2 Box w/ price
            2.3 Box w/ ranking
            2.4 place awards .map to boxes w/ awards (my = margin top + bottom) (image  + explaining)
            2.5 place cuisine .map to lil chips
            2.6 place address
            2.7 card action => buttons that allow to open place web site in new window
            */
        <Card elevation={6}>
            <CardMedia 
                style={{height:350}}
                image={place.photo ? place.photo.images.large.url : 'https://brendinstrument.ru/image/cache/no_image-1280x960.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'> {place.name} </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'> Price </Typography>
                    <Typography gutterBottom variant='subtitle1'> {place.price_level} </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'> Ranking </Typography>
                    <Typography gutterBottom variant='subtitle1'> {place.ranking} </Typography>
                </Box>
                {place?.awards?.map( (award) =>(
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img  src={award.images.small} alt={award.display_name}/>
                        <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map( ({name}) => (
                    <Chip key={name} size='small' label={name} className={classes.chip}/>
                ))}
                {place?.address && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={ () => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={ () => window.open(place.website, '_blank')}>
                        WebSite
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default PlaceDetails