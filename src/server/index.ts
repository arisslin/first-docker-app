import * as express from 'express';
import { Student } from '../types/index';

const app = express();
const port = 8000;

const student: Student = {
  firstName: 'Max',
  surname: 'Mustermann',
  gender: 'male',
  fieldOfStudy: 'informatics',
  birthday: new Date(1993, 1, 3),
};

app.get('/', (req, res) => {
  res.type('application/json');
  res.status(200);
  res.send(student);
});

app.listen(port, () => {
  console.log('Server runs on port ' + port);
});
