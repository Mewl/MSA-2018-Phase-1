import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
// import { Nav, Navbar, NavItem } from 'react-bootstrap';
// import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="primary">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Currency Exchange</Link>
                        <Link to="/FirstComponent"> About </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}