import { Student } from '../types/index';
import { fetchStudents } from '../helpers/fetchHelpers';

fetchStudents()
  .then((studentsData: Student[]) => console.log(studentsData))
  .catch((error) => console.error(error));
