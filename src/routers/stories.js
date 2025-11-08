import { Router } from 'express';

import { getStoriesController } from '../controllers/stories.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getStoriesController));

export default router;