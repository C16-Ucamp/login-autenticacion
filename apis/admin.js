const express = require('express')
const router = express.Router()

router.get('/yo', async(req,res) =>{
    const sessionUser = req.user

 if(!sessionUser){
    return res.status(403).send({
        message: 'Dewee esa no es tu familia' // tu no deberías estar aquí
    })
 }

 res.send({
    name: sessionUser.name,
    email: sessionUser.email
 })

})

module.exports = router