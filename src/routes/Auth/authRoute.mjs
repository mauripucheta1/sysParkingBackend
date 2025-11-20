import { Router } from 'express';
import { registerController } from '../../controllers/Auth/authController.mjs';

const router = Router();

router.post('/register', registerController);

router.post('/login', registerController);

export default router;