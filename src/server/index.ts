import * as express from 'express';
import { mockedStudentDatabase } from '../mocks/mockedStudentDatabase';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.type('text/html');
  res.status(200);
  res.send('Hello World');
});

app.get('/students', (req, res) => {
  res.type('application/json');
  res.status(200);
  res.send(mockedStudentDatabase);
});

app.listen(port, () => {
  console.log('Server runs on port ' + port);
});
