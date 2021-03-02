import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


import CardMedia from '@material-ui/core/CardMedia';

// white text area
const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 'auto',
        padding: '15%',
        textAlign: 'left',
    },
});



// section image
const useStyles2 = makeStyles({
    root: {
        maxWidth: 'auto',
        padding: '10%',
    },
    media: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        paddingLeft: '30%',
        paddingRight: '30%',
        paddingTop: '15%',
        paddingBottom: '15%'
    },
});



export default function MainBanner() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [state, setState] = React.useState({
        top: false,

    });

    return (
        <React.Fragment>
            <CssBaseline />


            {/* section 1 */}
            <Grid container spacing={24}>

                {/* section  with  animation */}
                <Grid item xl={8} sm={8} xs={12} lg={8} md={8}>
                    <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >
                        <CardMedia className={classes2.media}
                            component="img"
                            alt="Contemplative Reptile"
                            // height="500vh"
                            image="/images/u.png">
                        </CardMedia>
                    </Typography>
                </Grid>

                {/* section  with  text */}
                <Grid item xl={4} sm={4} xs={12} lg={4} md={4}>
                    <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: 'auto', marginTop: "15%", }} >
                        <div className={classes.root}>

                            <Typography variant="h3" gutterBottom lineHeight={10}>
                                <Box lineHeight={2} m={1}>
                                    REMEMBER
                </Box>
                                <Box lineHeight={2} m={1}>
                                    HOW WE
                </Box>
                                <Box lineHeight={2} m={1}>
                                    DREAMT TO
                </Box>
                                <Box lineHeight={2} m={1}>
                                    CHANGE
                </Box>
                                <Box lineHeight={2} m={1}>
                                    THE WORLD?
                </Box>

                            </Typography>

                        </div>

                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}