import {container} from "tsyringe"

import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepositories"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepositories"

import {ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationsRespositories"
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepositories"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

// ICategoriesRepositories
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)