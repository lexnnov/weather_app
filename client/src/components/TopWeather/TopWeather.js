import React, { Component } from 'react';
import './TopWeather.scss'

const gismeteo = require('../DetailedWeather/img/gis_logo.png');
const yandex = require('../DetailedWeather/img/yandex_logo.png');
const yahoo = require('../DetailedWeather/img/yahoo_logo.png');

class TopWeather extends Component {
  render() {
    return (
      <div>
        <h1 style={{ marginBottom: 0 }}>Weather from</h1>
        <div className='weatherHeader' >
          <div className='weatherHeader_service' >
            <img width="20px" src={gismeteo}/>
            <h5 >gismeteo</h5>
          </div>
          <div className='weatherHeader_service'>
            <img width="18px" src={yandex}/>
            <h5 >yandex</h5>
          </div>
          <div className='weatherHeader_service'>
            <img width="18px" src={yahoo}/>
            <h5 >yahoo</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default TopWeather;
