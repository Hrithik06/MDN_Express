import express from 'express';
const router =express.Router();

router.get("/",(req,res)=>{
    res.send("Wiki Home Page");
})

router.get("/about",(req,res)=>{
    res.send("Wiki About Page");
})


export default router;