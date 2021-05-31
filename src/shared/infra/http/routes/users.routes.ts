import {Router} from "express"
import multer from "multer"
import { CreateUserController } from "@modules/accounts/useCase/createUser/CreateUserController"
import { UpdateUserAvatarController } from "@modules/accounts/useCase/updateUserAvatar/UpdateUserAvatarController"

import uploadConfig from "@config/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ProfileUserController } from "@modules/accounts/useCase/profileUser/ProfileUserController"
const usersRoutes = Router()
const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()
const profileUserController = new ProfileUserController()


usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar", ensureAuthenticated ,uploadAvatar.single("avatar") ,updateUserAvatarController.handle)

usersRoutes.get("/profile", ensureAuthenticated ,profileUserController.handle)


export {usersRoutes} 