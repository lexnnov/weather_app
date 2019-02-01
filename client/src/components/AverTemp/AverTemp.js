import React, { Component } from 'react';
import './AverTemp.scss';

class AverTemp extends Component {
  render() {
    if (this.props.active) {
      return (
        <div className="temp animated fadeOutUp">
          <div
            className="temp_day">{Math.round((Number(this.props.temp.yandex_day[this.props.day])
            + Number(this.props.temp.gismeteo_day[this.props.day])
            + Number(this.props.temp.yahoo_day[this.props.day])) / 3)}°
          </div>
          <div
            className="temp_night">{Math.round((Number(this.props.temp.yandex_night[this.props.day])
            + Number(this.props.temp.gismeteo_night[this.props.day])
            + Number(this.props.temp.yahoo_night[this.props.day])) / 3)}°
          </div>
        </div>
      );
    }

    return (
      <div className="temp animated fadeInUp">
        <div
          className="temp_day">{Math.round((Number(this.props.temp.yandex_day[this.props.day])
          + Number(this.props.temp.gismeteo_day[this.props.day])
          + Number(this.props.temp.yahoo_day[this.props.day])) / 3)}°
        </div>
        <div
          className="temp_night">{Math.round((Number(this.props.temp.yandex_night[this.props.day])
          + Number(this.props.temp.gismeteo_night[this.props.day])
          + Number(this.props.temp.yahoo_night[this.props.day])) / 3)}°
        </div>
      </div>
    );

  }
}

export default AverTemp;
