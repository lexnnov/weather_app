import express from 'express';
import log4js from 'log4js';
import path from 'path';
import mountRouter from './routes/index';

const app = express();
const logger = log4js.getLogger();

log4js.configure({
  disableClustering: true,
  appenders: {
    out: {
      type: 'file',
      filename: 'logs/cheese.log',
      category: 'cheese',
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'info',
    },
  },
  pm2: true,
  pm2InstanceVar: 'INSTANCE_ID',
});

mountRouter(app);

app.use(express.static(path.join(__dirname, './client/')));
// respond with "hello world" when a GET request is made to the homepage
app.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
  logger.info('hello world');
//   res.send(yandex);
});


app.listen(3008, 'localhost');
