import React, {useState} from 'react'
//google helper
import { Autocomplete} from '@react-google-maps/api';
//typography is working w/ all texts and set it to 'h5'
//InputBase is input and Box is a div
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
// using this hook to style our components => check styles.js
import useStyles from './styles'

const Header = ({setCoordinates}) => {
    const classes = useStyles()
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoC) => setAutocomplete(autoC)

    const onPlaceChanged = () => {
        //from Google maps documentation
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()

        setCoordinates({lat, lng})
    }

    return (
        // headerBar => toolbar => label + container => label + some google completer => search div => search icon + input
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel helper
                </Typography>
                <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='search...' classes={ {root: classes.inputRoot, input: classes.inputInput} }/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header