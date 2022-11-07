import { Student } from '../types/index';
import { fetchStudents } from '../helpers/fetchHelpers';

fetchStudents()
  .then((students: Student[]) => renderStudentsTable(students))
  .catch((error) => console.error(error));

function renderStudentsTable(students: Student[]): void {
  console.log(students);
}
