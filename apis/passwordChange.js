const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {updatePasswordUser} = require('../controllers/userController')

router.put('/change', async(req,res) =>{
    const {oldPassword, newPassword} = req.body 
    const sessionUser = req.user 
    const id = sessionUser._id;

    if(!sessionUser){
        return res.status(403).send({
            message: "Tu no deberías estar aquí"
        })
    }
  
    const isPasswordCorrect = bcrypt.compareSync(oldPassword, sessionUser.password);

    if(!isPasswordCorrect){
        return res.status(403).send({
            message: "La contraseña es incorrecta, no puedes cambiar de contraseña"
        })
    } else {
        await updatePasswordUser(id, newPassword)

        res.send({
            message: "Se cambio la contraseña",
            newPassword: newPassword
        })
    }

})

module.exports = router