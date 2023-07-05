 const userService = class {
     constructor(userModel){
         this.Model = userModel
     }

     getByEmail(email){
        return this.Model.findOne({email})
     }


     async create(useData){
         const newUser = new this.Model(useData)
         await newUser.save()
         return newUser.toObject()
     }
 }

 module.exports = userService