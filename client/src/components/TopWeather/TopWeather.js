import React, { Component } from 'react';
import './TopWeather.scss'

class TopWeather extends Component {
  render() {
    return (
      <div>
        <h1 style={{ marginBottom: 0 }}>Weather from</h1>
        <div className='weatherHeader' >
          <div className='weatherHeader_service' >
            <img width="20px" src={require('../../components/DetailedWeather/img/gis_logo.png')}/>
            <h5 >gismeteo</h5>
          </div>
          <div className='weatherHeader_service'>
            <img width="18px" src={require('../../components/DetailedWeather/img/yandex_logo.png')}/>
            <h5 >yandex</h5>
          </div>
          <div className='weatherHeader_service'>
            <img width="18px" src={require('../../components/DetailedWeather/img/yahoo_logo.png')}/>
            <h5 >yahoo</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default TopWeather;
