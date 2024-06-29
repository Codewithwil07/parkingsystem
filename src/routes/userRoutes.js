import express from 'express';
const router = express.Router();

import { addUser } from '../controllers/userController.js';

router.route('/').post(addUser);

export default router;
