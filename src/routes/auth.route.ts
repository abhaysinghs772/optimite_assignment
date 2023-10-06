import { Router } from "express";
import signUpValidator from '../middlewares/validateSignUp'

import { signUp , logIn} from "../controllers/auth.controller";

const authRoute = Router();

authRoute.post('/signup', signUpValidator, signUp);
authRoute.post('/login', logIn);

export default authRoute;