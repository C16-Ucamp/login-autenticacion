 const express = require('express')
 const router = express.Router()
 const userService = require('../services/user');
 const userModel = require('../model/users')

 const UserService = new userService(userModel)

 router.get('/me', async(req,res)=>{
    const sessionUser = req.user
    if(!sessionUser){
        return res.status(403).send({
            message: 'Tu no deberias estar aqui'
        })
    }
    
    res.send({
        name: sessionUser.name,
        email: sessionUser.email
    })
 })

 router.post('/', async(req,res)=>{
     const body = req.body
     const user = await UserService.create(body)
     console.log(user)
     res.status(200).send(user)
 })

 module.exports = router