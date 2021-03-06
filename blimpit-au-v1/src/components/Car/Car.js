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
const useStyles4 = makeStyles({
    root: {
        width: '100%',
        maxWidth: 'auto',
        height:'100vh'
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
   
    },
});



export default function App() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes4 = useStyles4();
    const [state, setState] = React.useState({
        top: false,

    });

    return (
        <React.Fragment>
            <CssBaseline />

            {/* section 3 */}
            <Grid container spacing={24} className={classes4.root} style={{ backgroundColor: '#0B0831'}}>

                {/* section  with  text */}
                <Grid item xl={6} sm={6} xs={12} lg={6} md={6}>
                    <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >

                        <div className={classes.root}>

                            <Typography variant="h4" gutterBottom lineHeight={10}>
                                <Box lineHeight={2} m={0}  marginBottom={1} color="#02C6FF" >
                                    THIS TAKES FROM 
               
                                 </Box>
                                 <Box lineHeight={1} m={0}  marginBottom={4} color="#EFD200
" >
  
                                    A - B.
                                 </Box>
         
                                <Box lineHeight={2} m={0} marginBottom={4} color="#02C6FF" >
                                    BUT WHY STOP THERE?
                                         </Box>

                            </Typography>
                            <Typography variant="p" gutterBottom lineHeight={10}>
                                <Box lineHeight={2} m={0} marginBottom={4} color="#02C6FF" >
                                    We don’t stop at building the basic requirement. We find ways to innovate and take it beyond imagination.
                                    </Box>

                            </Typography>
                        </div>
                    </Typography>
                </Grid>

                {/* section  with  animation */}
                <Grid item xl={6} sm={6} xs={12} lg={6} md={6}>
                    <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >
                        <div >

                            <CardMedia className={classes2.media}
                                component="img"
                                alt="Contemplative Reptile"
                                // height="500vh"
                                image="/images/car.gif">
                            </CardMedia>

                        </div>


                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}