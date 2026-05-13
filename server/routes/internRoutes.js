const express=require("express");
const router=express.Router()
const { generateVerificationCode } = require("../controllers/internController");
const{ verifyCode,getAllInterns }=require("../controllers/internController");
router.post("/generate",generateVerificationCode);
router.get("/verify/:code", verifyCode);
router.get("/all", getAllInterns);
module.exports=router;