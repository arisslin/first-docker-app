import express from 'express';
import cors from 'cors';
import { mockedStudentDatabase } from '../mocks/mockedStudentDatabase';
import { mockedToDos } from '../mocks/mockedTodos';

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (request, response) => {
  response.type('text/html');
  response.status(200);
  response.send('Hello World');
});

app.get('/students', (request, response) => {
  response.type('application/json');
  response.status(200);
  response.send(mockedStudentDatabase);
});

app.get('/todos', (request, response) => {
  response.type('application/json');
  response.status(200);
  response.send(mockedToDos);
});

app.listen(port, () => {
  console.log('Server runs on port ' + port);
});
