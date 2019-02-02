import React, { Component } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import 'animate.css';
import axios from 'axios';
import { getTemp, animate } from '../../store/actions';
import DateTemp from '../../components/DateTemp/DateTemp';
import IconWeather from '../../components/IconWeather/IconWeather';
import AverTemp from '../../components/AverTemp/AverTemp';
import DetailedWeather from '../../components/DetailedWeather/DetailedWeather';
import TopWeather from '../../components/TopWeather/TopWeather';


class Home extends Component {
  componentWillMount = () => {
    axios.get('/')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('/getTemp')
      .then((response) => {
        this.props.getTemp(response.data, false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggle = day => () => {
    this.props.animate(day, !this.props.temp.animatearr[day]);
  };

  weekEnd = (day) => {
    const date = new Date();
    const myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (myDays[date.getDay() + day] === 'Sunday' || myDays[date.getDay() + day] === 'Saturday'
      ? 'small_weather animated fadeIn weekend'
      : 'small_weather animated fadeIn ');
  };

  animateDelay = day => ({
    animationDelay: `${day * 0.1} s`,
  });

  render() {
    return (
      <div className="App">

        <TopWeather/>

        {this.props.temp.yandex_day.slice(0, 7).map((item, i) => (
          <div key={i} onClick={this.toggle(i)} style={this.animateDelay(i)} className={`${this.weekEnd(i)}`}>

            <DateTemp weekDay={i}/>

            <IconWeather icon={this.props.temp.yandex_icon[i].join('')}
                         active={this.props.temp.animatearr[i]}/>

            <AverTemp temp={this.props.temp} day={i}
                      active={this.props.temp.animatearr[i]}/>

            <DetailedWeather temp={this.props.temp} day={i}
                             active={this.props.temp.animatearr[i]}/>

          </div>

        ))}

        <ClipLoader sizeUnit={'px'} size={20} color={'#123abc'} loading={this.props.temp.loading}/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  temp: state,
});

const mapDispatchToProps = dispatch => ({
  getTemp: (temp, loading) => {
    dispatch(getTemp(temp, loading));
  },
  animate: (number, state) => {
    dispatch(animate(number, state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
