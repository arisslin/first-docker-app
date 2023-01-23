import { Router } from 'express';
import { deleteToDo, getToDos, postToDo, putToDo } from './todos.controller';

const router = Router();

router.route('/').get(getToDos).post(postToDo).delete(deleteToDo).put(putToDo);

export default router;
