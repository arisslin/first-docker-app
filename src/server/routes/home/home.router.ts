import { Router } from 'express';
import { getHome } from './home.controller';

const router = Router();

router.route('/').get(getHome);

export default router;
