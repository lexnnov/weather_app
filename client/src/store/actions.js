export const ADD_TEMP = 'ADD_TEMP';

export const getTemp = (response, loading) => ({

  type: ADD_TEMP,
  payload: {
    yandex_day: response.yandex_day_temp,
    yandex_night: response.yandex_night_temp,
    yandex_icon: response.yandex_icon,
    yahoo_day: response.yahoo_day_temp,
    yahoo_night: response.yahoo_night_temp,
    gismeteo_day: response.gismeteo_day_temp,
    gismeteo_night: response.gismeteo_night_temp,
    loading,
  },
});

export const animate = (number, state) => (
  {
    type: 'ANIMATE',
    payload: {
      number,
      state,
    },
  });
