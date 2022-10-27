import * as express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.type('text/html');
  res.status(200);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server runs on port ' + port);
});
