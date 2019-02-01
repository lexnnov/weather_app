import React, {Component} from 'react';
import '../../../node_modules/animate.css/animate.css';
import './IconWeather.scss';


class IconWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      icon: {
        animationDelay: this.props.name2 + 0.3 + 's',
        transition: '0.1s',
        display: 'block',
        position: 'absolute',
        animationDuration: '0.5s',
      },
    };
  }

  addIcon = () => {
    return (require(this.props.icon === 'icon_thumb_ovc-m-ra'
      ? './img/lite_rain.png'
      : this.props.icon === 'icon_thumb_ovc'
        ? './img/cloudy.png'
        : this.props.icon === 'icon_thumb_ovc-ra-sn'
          ? './img/rain_w_snow.png'
          : this.props.icon === 'icon_thumb_ovc-m-sn'
            ? './img/lite_snow.png'
            : this.props.icon === 'icon_thumb_ovc-ra'
              ? './img/rain.png'
              : './img/sunny.png'));
  };

  render() {
    if (this.props.active) {
      return (
        <img className={'animated fadeOutUp iconWeather'} style={this.state.icon}
             src={this.addIcon()} width="40px" role="presentation"/>
      );
    }
    return (
      <img className={'animated fadeInUp iconWeather'} style={this.state.icon}
           src={this.addIcon()} width="40px" role="presentation"/>
    );
  }
}

export default IconWeather;
