import express from 'express'
import sessionMiddleware from './src/middlewares/sessionMiddleware.js'
import UserController from './src/Controllers/UserController.js'

const route = express.Router()


route.get('/user-form', UserController.prototype.userForm)
route.get('/users', UserController.prototype.getUser)
route.post('/user', sessionMiddleware, UserController.prototype.postUser)


export default route