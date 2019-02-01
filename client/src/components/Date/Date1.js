import React, {Component} from 'react';
import './Date1.scss'

class Date1 extends Component {
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.props.weekDay );
    const day = date.getDate()
    const month = date.getMonth()
    const weekDay = date.getDay()
    const myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const myMonts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (

      <div className="day">

        <div className="date">
          <p
            className="dayWeek">{this.props.weekDay === 0 ? 'Today' : this.props.weekDay === 1 ? 'Tomorrow' : myDays[weekDay]} </p>
          <p className="dayMonth">{myMonts[month]}, {day}</p>
        </div>

      </div>
    );
  }
}

export default Date1;
