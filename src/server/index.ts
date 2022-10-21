import * as http from 'http';

http
  .createServer((request, response) => {
    console.log('request received');
    response.end('omg hi', 'utf-8');
  })
  .listen(3000);
console.log('server started');
