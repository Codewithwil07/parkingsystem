import express from 'express';
import { createUser, validateUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(validateUser, createUser);

export default router;
