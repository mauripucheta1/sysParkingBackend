import { Router } from 'express';
import { registerController } from '../../controllers/Auth/authController.mjs';

const router = Router();

router.post('/register', registerController);

export default router;