import { Router } from 'express';
import { registerController, loginController } from '../../controllers/Auth/authController.mjs';

const router = Router();

router.post('/register', registerController);

router.post('/login', loginController);

export default router;