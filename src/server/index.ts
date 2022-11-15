import express from 'express';
import cors from 'cors';
import { readFile } from 'fs';

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (request, response) => {
  response.type('text/html');
  response.status(200);
  response.send('Hello World');
});

app.get('/todos', (request, response) => {
  readFile('src/common/mocks/mockedTodos.json', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      try {
        const dataString = data.toString();
        const dataJSON = JSON.parse(dataString);

        response.type('application/json');
        response.status(200);
        response.send(dataJSON);
      } catch (error) {
        console.error(error);
      }
    }
  });
});

app.listen(port, () => {
  console.log('Server runs on http://localhost:' + port);
});
