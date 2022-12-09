export type ToDo = {
  id: string;
  task: string;
  isDone: boolean;
};

export const isToDo = (arg: any) => {
  if (typeof arg !== 'object') {
    return false;
  }

  return true;
};
