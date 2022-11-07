const serverUrl = 'http://localhost';
const port = '8000';

fetchStudents()
  .then((studentsData) => console.log(studentsData))
  .catch((error) => console.error(error));

async function fetchStudents() {
  const response = await fetch(serverUrl + ':' + port + '/students');

  if (!response.ok) {
    const message = `An error has occured. Status ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
