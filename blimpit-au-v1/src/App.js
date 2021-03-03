import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import NavBar from './components/Navibar/NaviBar';
import MainBanner from './components/MainBanner/MainBanner';
import Bulb from './components/Bulb/Bulb'
import Car from './components/Car/Car'
import Transform from './components/Transform/Transform'


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <MainBanner />
      <Bulb />
      <Car />
      <Transform/>

    </React.Fragment>
  );
}