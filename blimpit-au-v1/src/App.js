import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';

import CardMedia from '@material-ui/core/CardMedia';
import './images/u.png'

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// white text area
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 'auto',
    padding: '15%',
    textAlign: 'left',
  },
});

// navigation bar
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0',
    alignItems: 'inherit'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    paddingLeft: '35%',
    paddingRight: '35%',
    paddingTop: '15%',
    paddingBottom: '15%'
  },
});

// navigation bar after click hamburger
const useStyles3 = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
    background: '#0B0831',
    color: 'white'
  },
});

export default function App() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [state, setState] = React.useState({
    top: false,

  });
  // navigation bar after click hamburger
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes3.list, {
        [classes3.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ diplay: 'flex' }}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: "white" }} /> : <MailIcon style={{ color: "white" }} />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List  >
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: "white" }} /> : <MailIcon style={{ color: "white" }} />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />

      {/*navigation bar */}

      <Grid container spacing={24}>
        <Grid item xl={12} sm={12} xs={12} lg={12} md={12}>
          <Typography component="div" >
            <div className={classes1.root}>
              <AppBar position="fixed" style={{ backgroundColor: '#0B0831' }} >
                <Toolbar alignItems='inherit' >
                  <Grid item xl={8} sm={8} xs={12} lg={8} md={8} style={{ backgroundColor: '#0B0831' }}>
                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                      Logo
                     </IconButton>
                    <Typography variant="h6" className={classes1.title}>

                    </Typography>

                  </Grid>
                  <Grid item xl={4} sm={4} xs={12} lg={4} md={4} align="right" style={{ backgroundColor: '#0B0831' }}>

                    <div>
                      {['top'].map((anchor) => (

                        <React.Fragment key={anchor}>
                          <Button onClick={toggleDrawer(anchor, true)} className={classes1.menuButton} style={{ color: "white" }}><DehazeIcon color="white" /></Button>
                          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </div>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>
          </Typography>
        </Grid>
      </Grid>

      {/* section 1 */}
      <Grid container spacing={24}>

        {/* section  with  animation */}
        <Grid item xl={8} sm={8} xs={12} lg={8} md={8}>
          <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >
            <CardMedia className={classes2.media}
              component="img"
              alt="Contemplative Reptile"
              // height="500vh"
              image="data:image/png;base64,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">
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

      {/* section 2 */}
      <Grid container spacing={24}>

        {/* section  with  text */}
        <Grid item xl={4} sm={4} xs={12} lg={4} md={4}>
          <Typography component="div" style={{ backgroundColor: '#FFFFFF', height: 'auto'  }} >
            <div className={classes2.media}>

              <CardMedia className={classes2.media}
                component="img"
                alt="Contemplative Reptile"
                // height="500vh"
                image="./images/bulb.gif">
              </CardMedia>

            </div>

          </Typography>
        </Grid>

        {/* section  with  animation */}
        <Grid item xl={8} sm={8} xs={12} lg={8} md={8}>
          <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >
           
              <div className={classes.root}>

                <Typography variant="h4" gutterBottom lineHeight={10}>
                  <Box lineHeight={2} m={1}>
                  COLLABORATE WITH A CREATIVE MINDSET
                  </Box>
                  <Box lineHeight={2} m={1}>
                    
                  </Box>
                  <Box lineHeight={2} m={1}>
                  UTILIZE MODERN TECHNOLOGY
                  </Box>
                  <Box lineHeight={2} m={1}>
                   
                  </Box>
                  <Box lineHeight={2} m={1}>
                  FIND WAYS TO INNOVATE
                  </Box>

                </Typography>

              </div>

            </Typography>

         
        </Grid>
      </Grid>

      {/* section 3 */}
      <Grid container spacing={24}>

        {/* section  with  text */}
        <Grid item xl={6} sm={6} xs={12} lg={6} md={6}>
          <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >

            <div className={classes.root}>

              <Typography variant="h4" gutterBottom lineHeight={10}>
                <Box lineHeight={2} m={0}>
                THIS TAKES FROM 
              </Box>
                <Box lineHeight={2} m={1}>
                A - B.
              </Box>
                <Box lineHeight={2} m={1}>
                BUT WHY STOP THERE?
              </Box>

              </Typography>
              <Typography variant="p" gutterBottom lineHeight={10}> 
              <Box lineHeight={2} m={0}>
              We don’t stop at building the basic requirement. We find ways to innovate and take it beyond imagination. 
              </Box>
             
              </Typography>
            </div>
          </Typography>
        </Grid>

        {/* section  with  animation */}
        <Grid item xl={6} sm={6} xs={12} lg={6} md={6}>
          <Typography component="div" style={{ backgroundColor: '#0B0831', height: 'auto' }} >
            <div className={classes.root}>

              <CardMedia className={classes2.media}
                component="img"
                alt="Contemplative Reptile"
                // height="500vh"
                image="./images/bulb.gif">
              </CardMedia>

            </div>


          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}