import express from 'express';

import auth from '../middleware/auth.js';

import { example } from '../controllers/example.js';

const router = express.Router();


router.get('/', example);

export default router;