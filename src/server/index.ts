import express, { Request, Response } from 'express';
import cors from 'cors';
import { mockedStudentDatabase } from '../mocks/mockedStudentDatabase';

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.type('text/html');
  res.status(200);
  res.send('Hello World');
});

app.get('/students', (req: Request, res: Response) => {
  res.type('application/json');
  res.status(200);
  res.send(mockedStudentDatabase);
});

app.listen(port, () => {
  console.log('Server runs on port ' + port);
});
