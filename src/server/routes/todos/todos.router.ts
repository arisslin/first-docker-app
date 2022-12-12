import { Router } from 'express';
import { getToDos, postToDos } from './todos.controller';

const router = Router();

router.route('/').get(getToDos).post(postToDos);

export default router;
