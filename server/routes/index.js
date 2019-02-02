import tempHandler from '../controllers/temp.controller';

const mountRoutes = (app) => {
  app.get('/getTemp', tempHandler.parseWeather);
  app.get('/', tempHandler.sendClient);
};

export default mountRoutes;
