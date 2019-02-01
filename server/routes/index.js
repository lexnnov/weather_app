import tempHandler from '../controllers/temp.controller';

const mountRoutes = (app) => {
  app.get('/getTemp', tempHandler.parseWeather);
};

export default mountRoutes;
