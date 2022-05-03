import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const authRoutes = Router()
const controller = new AuthController()

authRoutes.use('/login', controller.login)
authRoutes.use('/register', controller.register)

export default authRoutes