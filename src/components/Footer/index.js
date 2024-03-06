import React from 'react';
import styles from "./Footer.module.css";
import {Grid} from "@mui/material";
const Index = () => {
    return (
        <>
            <Grid container sx={{mt : 10 , padding : 6}} justifyContent="center" alignItems="center" className={styles.FooterImg}>
                <Grid item xs/>
                <Grid item xs={9}>
                    <img src="/images/Group-2.1-1.png" className={styles.imgFooter} alt="Group"/>
                </Grid>
                <Grid item xs/>
            </Grid>
            <div className={styles.FooterThanks}>
                © 2019 year. Worky Lite | Multipurpose Theme design by TemplateMonster
            </div>
        </>
    );
};

export default Index;