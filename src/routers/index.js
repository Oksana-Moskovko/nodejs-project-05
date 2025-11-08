import { Router } from 'express';
import storiesRouter from './stories.js';

const router = Router();

router.use('/stories', storiesRouter);

export default router;