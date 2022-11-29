import { Response, Request } from 'express';
import { readFile } from 'fs';

const dataPath = 'src/common/mocks/mockedTodos.json';

export function getToDos(request: Request, response: Response): void {
  readFile(dataPath, (error, data) => {
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
}

export function postToDos(request: Request, response: Response): void {
  console.log(request.body);

  response.type('application/json');
  response.status(404);
  response.send(JSON.stringify('Added to do!'));
}
