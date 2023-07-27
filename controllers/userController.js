const userModel = require('../model/users')
const bcrypt = require('bcrypt')

const updatePasswordUser = async(id, updatePassword) =>{
    const upDate = {password: bcrypt.hashSync(updatePassword,12)}

    const result = await userModel.findByIdAndUpdate({_id: id}, upDate, {
        upsert: false,
        new: true
    })

    return result
}

module.exports = {
    updatePasswordUser
}