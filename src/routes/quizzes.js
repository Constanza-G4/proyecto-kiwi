const { request } = require('express')

const express = require('express'),
      router = express.Router()

router.get("/:id",async(req,res)=>{
    console.log(req.params.id)
    res.render("../views/Quizzes/quizz")
})
      
module.exports=router