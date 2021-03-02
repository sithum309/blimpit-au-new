import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


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

export default function NaviBar() {
  const classes1 = useStyles1();
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


    </React.Fragment>
  );
}