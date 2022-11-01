import { Student } from '../types/index';

export const mockedStudentDatabase: Student[] = [
  {
    firstName: 'Max',
    surname: 'Mustermann',
    gender: 'male',
    fieldOfStudy: 'informatics',
    birthday: new Date(1993, 1, 3),
  },
  {
    firstName: 'Marie',
    surname: 'Müller',
    gender: 'female',
    fieldOfStudy: 'history',
    birthday: new Date(1991, 6, 23),
  },
  {
    firstName: 'Michelle',
    surname: 'Meier',
    gender: 'other',
    fieldOfStudy: 'mathematics',
    birthday: new Date(1992, 7, 13),
  },
];
