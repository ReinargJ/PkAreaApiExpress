const mariadb = require('mariadb');
const cors = require('cors');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  connectionLimit: 5,
  database: 'pkarea',
  connectTimeout: 1000
});

let server;

server = app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});


const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
