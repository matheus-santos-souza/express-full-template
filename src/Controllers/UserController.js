import UserModel from "../models/UserModel.js";

export default class UserController {

   async getUser ( req, res ) {
      const users = await UserModel.find()
      res.json(users)
   }

   async postUser ( req, res ) {
      const { nome, sobrenome } = req.body

      const user = await UserModel.create({
         nome,
         sobrenome
      })

      res.json(user)
   }

   userForm (req, res) {
      res.render('userForm')
   }
}