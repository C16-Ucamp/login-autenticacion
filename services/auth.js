const bcrypt = require('bcrypt')

const authServices = class{
    constructor(userService){
        this.UserService = userService
        this.bcrypt = bcrypt
    }
    // async login(email,password){

    //     const user = await this.UserService.getByEmail(email)

    //     // if(!user){
    //     //     throw new Error('Este usuario no existe')
    //     // } else if(await bcrypt.compare(password, user.password) || !user){
    //     //     return user.toObject();
    //     // } else {
    //     //     throw new Error('No puedes pasar')
    //     // }

    //     if(user){
    //         const isPasswordMatch = await this.bcrypt.compare(password, user.password);
    //         if(isPasswordMatch){
    //             return user.toObject()
    //         } else {
    //             throw new Error('La contraseña es incorrecta')
    //         }
    //     } else {
    //       throw new Error('Acceso no validado')
    //     }
    //}

    async login(email,password){
        const user = await this.UserService.getByEmail(email)
        console.log("Usuario recuperado: ", user);

        // Comparación de contraseñas
        if (user) {

            const isPasswordMatch = await this.bcrypt.compare(password, user.password);
      
            if (isPasswordMatch) {
              return user.toObject();
            } else {
              throw new Error('La contraseña es incorrecta');
            }
          } else {
            throw new Error('El usuario no existe');
          }
        }
   
}

module.exports = authServices