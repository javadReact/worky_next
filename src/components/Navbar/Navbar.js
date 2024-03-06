import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Grid, IconButton, Menu, MenuList, MenuItem} from "@mui/material";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
const navItems = [
    {
        path : "/",
        name : "Home"
    },
    {
        path : "/about",
        name : "About"
    }
    ,{
        path : "/services",
        name : "Services"
    },
    {
        path : "/blog",
        name : "Blog"
    }
]
const Navbar = () => {
    // const [nav , Setnav] = useState<null | HTMLElement>(null);
    // const openNav = (event:MouseEvent HTMLElement )=>{
    //     Setnav(event.currentTarget)
    // };
    // const closeNav = (event)=>{
    //     Setnav(null)
    // };
    return (
        <>
        <AppBar position="fixed" className={styles.menu}>
            <Grid container>
                <Grid item xs />
                <Grid item xs={9}>
                        <Toolbar sx={{height : "5.65rem" , py :0}}>
                            <Grid container>
                                <Grid item xs sx={{flexGrow: 1}}>
                                    <img className={styles.logo} src="/images/logo.webp" alt="Logo"/>
                                </Grid>
                            </Grid>
                            <Grid item xs sx={{display : {xs : "none" , sm : "flex"}}}>
                                {
                                    navItems.map(nav => (
                                        <NavLink to={nav.path}>
                                            <Typography color="common.white" className={styles.navText}>{nav.name}</Typography>
                                        </NavLink>
                                    ))
                                }
                            </Grid>
                            {/*<Grid item xs sx={{display : {xs : "flex" , sm : "none"}}} onClose={closeNav}>*/}
                            {/*    <IconButton size="large" edge="start" color="common.white" onClick={openNav}>*/}
                            {/*        /!*<MenuIcon/>*!/*/}
                            {/*    </IconButton>*/}
                            {/*    <Menu open={Boolean(nav)} sx={{display : {xs : "none" , sm : "flex"}}}>*/}
                            {/*        <MenuList>*/}
                            {/*            <MenuItem>*/}
                            {/*                {*/}
                            {/*                    navItems.map(nav => (*/}
                            {/*                        <NavLink to={nav.path}>*/}
                            {/*                            <Typography color="common.white" className={styles.navText}>{nav.name}</Typography>*/}
                            {/*                        </NavLink>*/}
                            {/*                    ))*/}
                            {/*                }*/}
                            {/*            </MenuItem>*/}
                            {/*        </MenuList>*/}
                            {/*    </Menu>*/}
                            {/*</Grid>*/}
                        </Toolbar>
                </Grid>
                <Grid item xs/>
            </Grid>
        </AppBar>
        </>
    );
};

export default Navbar;