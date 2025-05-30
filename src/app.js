const createServer = require('./Infrastructures/http/createServer');
const container = require('./Infrastructures/container');
const env = require('../config/env');

(async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`${env.NODE_ENV} server start at ${server.info.uri}`);
})();
