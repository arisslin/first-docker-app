import { Router } from 'express';
import { deleteToDo, getToDos, postToDos } from './todos.controller';

const router = Router();

router.route('/').get(getToDos).post(postToDos).delete(deleteToDo);

export default router;
