import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant='h6' className={classes.title} color="inherit">
                    <img src={logo} alt='AxrorCommerce' height='25px' className={classes.image} />
                    Axror Commerce
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart Item" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    )
};

export default Navbar;
