const http = require('http');
const app = require('./app');

const host = '127.0.0.1';
const port = '3000';

const server = http.createServer(app);
server.listen(port, host, () => {
  try {
    console.log(`http://${host}:${port}`);
  } catch (error) {
    console.log(error.stack);
  }
});
