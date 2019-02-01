const initialState = {
  yandex_day: [],
  yandex_night: [],
  yandex_icon: [],
  yahoo_day: [],
  yahoo_night: [],
  gismeteo_day: [],
  gismeteo_night: [],
  loading: true,
  animatearr: [false, false, false, false, false, false, false],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TEMP':
      return {
        ...state,
        yandex_day: action.payload.yandex_day,
        yandex_night: action.payload.yandex_night,
        yandex_icon: action.payload.yandex_icon,
        yahoo_day: action.payload.yahoo_day,
        yahoo_night: action.payload.yahoo_night,
        gismeteo_day: action.payload.gismeteo_day,
        gismeteo_night: action.payload.gismeteo_night,
        loading: action.payload.loading,
      };
    case 'ANIMATE':
      return {
        ...state,
        animatearr: [false, false, false, false, false, false, false].map((item, i) => {
          if (i === action.payload.number) {
            return action.payload.state;
          }
          return item;
        }),
      };

    default:
      return state;
  }
}

export default rootReducer;
