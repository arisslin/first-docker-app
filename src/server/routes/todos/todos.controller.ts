import { Response, Request, NextFunction } from 'express';
import { errorNoToDo } from '../../../common/errors/globalError';
import { readJSONFromFS, writeToFs } from '../../../common/helpers/fsHelpers';
import { isToDo, ToDo } from '../../../common/types/index';

const dataPath = 'src/common/mocks/mockedTodos.json';

export async function deleteToDo(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  if (!isToDo(request.body)) {
    next(errorNoToDo);
  } else {
    try {
      const toDos = await readJSONFromFS<ToDo[]>(dataPath);
      const newToDos = toDos.filter((todo) => todo.id !== request.body.id);
      const newToDosStringified = JSON.stringify(newToDos);

      writeToFs(dataPath, newToDosStringified);

      response.type('application/json');
      response.status(200);
      response.send(JSON.stringify('Deleted to do!'));
    } catch (error) {
      next(error);
    }
  }
}

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

export async function postToDo(
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

export async function putToDo(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  if (!isToDo(request.body)) {
    next(errorNoToDo);
  } else {
    try {
      const toDos = await readJSONFromFS<ToDo[]>(dataPath);
      const updatedToDo: ToDo = request.body;
      const toDoAt = toDos.findIndex((toDo) => toDo.id === updatedToDo.id);

      toDos[toDoAt] = updatedToDo;

      const updatedToDosStringified = JSON.stringify(toDos);

      writeToFs(dataPath, updatedToDosStringified);

      response.type('application/json');
      response.status(200);
      response.send(JSON.stringify('Updated to do!'));
    } catch (error) {
      next(error);
    }
  }
}
