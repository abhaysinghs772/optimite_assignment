import { Router } from "express";
import signUpValidator from '../middlewares/validateSignUp';
import logInValidator from '../middlewares/validateLogIn';

import { signUp, logIn } from "../controllers/auth.controller";

const authRoute = Router();

authRoute.post('/signup', signUpValidator, signUp);
authRoute.post('/login', logInValidator, logIn);

export default authRoute;