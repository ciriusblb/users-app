const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) throw err;
        else{
            console.log("datos ",users);
            res.json(users);
        }
    })
})
router.post('/users',(req,res)=>{
    delete req.body._id;
    User.create(req.body,(err,users)=>{
        if(err) throw err;
        else{
            res.json(users);
        }
    })
})
router.put('/users/:id',(req,res)=>{
    delete req.body.id;    
    User.update({_id:req.params.id},req.body,(err,users)=>{
        if(err) throw err;
        else{
            res.json(users);
        }
    })
})
router.delete('/users/:id',(req,res)=>{ 
    console.log(req.query);
    User.deleteOne({_id:req.params.id},(err,users)=>{
        if(err) throw err;
        else{
            res.json(users);
        }
    })
})
module.exports= router;