import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
   nome: String,
   sobrenome: String
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel