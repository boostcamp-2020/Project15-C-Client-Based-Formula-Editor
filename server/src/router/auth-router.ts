import express from 'express';
import AuthController from '@controllers/auth-controller';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/autologin', AuthController.authCheck, AuthController.autoLogin);

export default router;
