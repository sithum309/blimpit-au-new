import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

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
//Text box
const useStyles3 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

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



export default function Bulb() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const [state, setState] = React.useState({
        top: false,

    });
   
    return (
        <React.Fragment>
            <CssBaseline />


            {/* section 2 */}
            <Grid container spacing={24}>

                {/* section  with  text */}
                <Grid item xl={4} sm={4} xs={12} lg={4} md={4}>
                    <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: 'auto' }} >
                        <CardMedia className={classes2.media}
                            component="img"
                            alt="Contemplative Reptile"
                            // height="500vh"
                            image="/images/bulb.gif">
                        </CardMedia>

                    </Typography>
                </Grid>

                {/* section  with  animation */}
                <Grid item xl={8} sm={8} xs={12} lg={8} md={8}>
                    <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >

                        <div className={classes.root}>

                            <Typography variant="h4" gutterBottom lineHeight={10}>
                                <Box lineHeight={2} m={1}  border={2} textAlign="center">
                                COLLABORATE WITH A CREATIVE MINDSET
                        
                  </Box>
                                <Box lineHeight={2} m={1}>

                                </Box>
                                <Box lineHeight={2} m={1} border={2} textAlign="center"> 
                                    UTILIZE MODERN TECHNOLOGY
                  </Box>
                                <Box lineHeight={2} m={1}>

                                </Box>
                                <Box lineHeight={2} m={1}  border={2} textAlign="center">
                                    FIND WAYS TO INNOVATE
                  </Box>

                            </Typography>

                        </div>

                    </Typography>


                </Grid>
            </Grid>

        </React.Fragment>
    );
}