import { Router } from "express";

import registerNewUser from "../controllers/user/postNewUser";

const userRouter = Router();

userRouter.post('/user-register', registerNewUser)

export default userRouter;