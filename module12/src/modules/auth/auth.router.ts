// import { Router } from "express";

import express from "express" 
import { authcontrols } from "./auth.controll";

const router = express.Router()

router.post('/login', authcontrols.loginUser)


export const autRoutes = router;
