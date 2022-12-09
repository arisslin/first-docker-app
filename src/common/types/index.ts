export type ToDo = {
  id: string;
  task: string;
  isDone: boolean;
};

export const isToDo = (arg: any) => {
  const argLength =
    typeof arg === 'object' && arg !== null
      ? Object.entries(arg).length
      : undefined;

  if (
    argLength === 3 &&
    arg.id !== undefined &&
    arg.task !== undefined &&
    arg.isDone !== undefined
  ) {
    return true;
  }

  return false;
};
