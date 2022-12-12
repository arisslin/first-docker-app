export type ToDo = {
  id: string;
  task: string;
  isDone: boolean;
};

export const isToDo = (arg: unknown) => {
  if (
    typeof arg === 'object' &&
    arg !== null &&
    Object.entries(arg).length === 3 &&
    Object.keys(arg).includes('id') &&
    Object.keys(arg).includes('task') &&
    Object.keys(arg).includes('isDone')
  ) {
    return true;
  }

  return false;
};
