import { Response, Request } from 'express';
import { readJSONFromFS } from '../../../common/helpers/fsHelpers';
import { ToDo } from '../../../common/types/index';

const dataPath = 'src/common/mocks/mockedTodos.json';

export async function getToDos(request: Request, response: Response) {
  try {
    const toDos = await readJSONFromFS<ToDo[]>(dataPath);

    console.log(toDos);

    response.type('application/json');
    response.status(200);
    response.send(toDos);
  } catch (error) {
    console.error(error);
  }
}

export function postToDos(request: Request, response: Response): void {
  console.log(request.body);

  response.type('application/json');
  response.status(200);
  response.send(JSON.stringify('Added to do!'));
}
