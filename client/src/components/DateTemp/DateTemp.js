import React, {Component} from 'react';
import './DateTemp.scss'

class DateTemp extends Component {
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.props.weekDay );
    const day = date.getDate()
    const month = date.getMonth()
    const weekDay = date.getDay()
    const myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const myMonts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div className="dayDate">
        <div className="dayDate_container">
          <p className="dayDate_container_dayWeek">{this.props.weekDay === 0 ? 'Today' : this.props.weekDay === 1 ? 'Tomorrow' : myDays[weekDay]} </p>
          <p className="dayDate_container_day">{myMonts[month]}, {day}</p>
        </div>
      </div>
    );
  }
}

export default DateTemp;
