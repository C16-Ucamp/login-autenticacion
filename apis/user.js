 const express = require('express')
 const router = express.Router()
 
 router.get('/me', async(req,res)=>{
    const sessionUser = req.user

    console.log("sessionUser", sessionUser)

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

//  router.post('/', async(req,res)=>{
//      const body = req.body
//      const user = await UserService.create(body)
//      console.log(user)
//      res.status(200).send(user)
//  })

 module.exports = router