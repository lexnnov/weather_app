import request from 'request-promise';
import cheerio from 'cheerio';
import log4js from 'log4js';
import Url from '../constants/urls';

const logger = log4js.getLogger();

const parseWeather = (req, res) => {
  const temp = {
    yandex_day_temp: [],
    yandex_night_temp: [],
    yandex_icon: [],

    gismeteo_day_temp: [],
    gismeteo_night_temp: [],

    yahoo_day_temp: [],
    yahoo_night_temp: [],
  };

  const a = request(Url.YANDEX_URL).then((body) => {
    const $ = cheerio.load(body),
      day = $('.forecast-briefly__temp_day .temp__value'),
      night = $('.forecast-briefly__temp_night .temp__value'),
      icon = $('.forecast-briefly__days .forecast-briefly__day .icon ');

    day.each(function () {
      temp.yandex_day_temp.push($(this).text().replace('+', '').replace('−', '-'));
    });
    night.each(function () {
      temp.yandex_night_temp.push($(this).text().replace('+', '').replace('−', '-'));
    });
    icon.each(function () {
      temp.yandex_icon.push($(this).attr('class').split(/\s+/).slice(1, 2));
    });
  });


  const b = request(Url.YAHOO_URL).then((body) => {
    const $ = cheerio.load(body),
      day = $('.high'),
      night = $('.low');
    day.each(function () {
      temp.yahoo_day_temp.push(Math.floor((($(this).text().replace('°', '')) - 32) * 5 / 9));
    });
    night.each(function () {
      temp.yahoo_night_temp.push(Math.floor((($(this).text().replace('°', '')) - 32) * 5 / 9));
      console.log(temp.yahoo_night_temp);
    });
  });

  const c = request(Url.GISMETEO_URL).then((body) => {
    const $ = cheerio.load(body),
      day = $('.maxt .unit_temperature_c'),
      night = $('.mint .unit_temperature_c');

    day.each(function (i) {
      if (i < 10) {
        temp.gismeteo_day_temp.push($(this).text().replace('+', '').replace('−', '-'));
      }
    });
    night.each(function (i) {
      if (i < 10) {
        temp.gismeteo_night_temp.push($(this).text().replace('+', '').replace('−', '-'));
      }
    });
  });

  Promise.all([a, b, c]).then(() => {
    console.log(temp);
    logger.info('temps', temp);
    res.send(temp);
  });
};

export default {
  parseWeather,
};
