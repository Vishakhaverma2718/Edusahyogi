import express from 'express';
import { addUser ,sendMsg} from '../controllers/userController.js';

const router = express.Router();
router.get('/',(req,res)=>{
    res.render("index");
})
router.post("/register",addUser);
router.post("/msg",sendMsg)


export default router;