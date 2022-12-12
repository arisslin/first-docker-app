import { Response, Request, NextFunction } from 'express';
import { errorNoToDo } from '../../../common/errors/globalError';
import { readJSONFromFS, writeToFs } from '../../../common/helpers/fsHelpers';
import { isToDo, ToDo } from '../../../common/types/index';

const dataPath = 'src/common/mocks/mockedTodos.json';

export async function getToDos(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const toDos = await readJSONFromFS<ToDo[]>(dataPath);

    response.type('application/json');
    response.status(200);
    response.send(toDos);
  } catch (error) {
    next(error);
  }
}

export async function postToDos(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  if (!isToDo(request.body)) {
    next(errorNoToDo);
  } else {
    try {
      const toDos = await readJSONFromFS<ToDo[]>(dataPath);
      const newToDos: ToDo[] = [...toDos, request.body];
      const newToDosStringified = JSON.stringify(newToDos);

      writeToFs(dataPath, newToDosStringified);

      response.type('application/json');
      response.status(200);
      response.send(JSON.stringify('Added to do!'));
    } catch (error) {
      next(error);
    }
  }
}
