const serverUrl = 'http://localhost';
const port = '8000';

const students = await fetch(serverUrl + ':' + port + '/students');

console.log(students);
