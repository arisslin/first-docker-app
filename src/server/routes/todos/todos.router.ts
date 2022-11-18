import { Router } from 'express';
import { getToDos } from './todos.controller';

const router = Router();

router.route('/').get(getToDos);

export default router;
