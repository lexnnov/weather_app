import React, {Component} from 'react';
import '../../../node_modules/animate.css/animate.css';
import './DetailedWeather.scss';

const gismeteo = require('./img/gis_logo.png');
const yandex = require('./img/yandex_logo.png');
const yahoo = require('./img/yahoo_logo.png');

class DetailedWeather extends Component {
  render() {
    if (!this.props.active) {
      return (
        <div className="more_weather animated fadeOutUp more_weather_active">
          <div className='more_weather_container'>
            <div className="more_weather_container_service">
              <img src={gismeteo} width="20px" role="presentation"/>
              <h5> {this.props.temp.gismeteo_day[this.props.day]} / {this.props.temp.gismeteo_night[this.props.day]}</h5>
            </div>
            <div className="more_weather_container_service">
              <img src={yandex} width="20px" role="presentation"/>
              <h5> {this.props.temp.yandex_day[this.props.day]} / {this.props.temp.yandex_night[this.props.day]}</h5>
            </div>
            <div className="more_weather_container_service">
              <img src={yahoo} width="20px" role="presentation"/>
              <h5> {this.props.temp.yahoo_day[this.props.day]} / {this.props.temp.yahoo_night[this.props.day]}</h5>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="more_weather animated fadeInUp ">
        <div className='more_weather_container'>
          <div className="more_weather_container_service">
            <img src={gismeteo} width="20px" role="presentation"/>
            <h5> {this.props.temp.gismeteo_day[this.props.day]} / {this.props.temp.gismeteo_night[this.props.day]}</h5>
          </div>
          <div className="more_weather_container_service">
            <img src={yandex} width="20px" role="presentation"/>
            <h5> {this.props.temp.yandex_day[this.props.day]} / {this.props.temp.yandex_night[this.props.day]}</h5>
          </div>
          <div className="more_weather_container_service">
            <img src={yahoo} width="20px" role="presentation"/>
            <h5> {this.props.temp.yahoo_day[this.props.day]} / {this.props.temp.yahoo_night[this.props.day]}</h5>
          </div>
        </div>
      </div>
    );

  }
}

export default DetailedWeather;
