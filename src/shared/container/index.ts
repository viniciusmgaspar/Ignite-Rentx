import {container} from "tsyringe"

import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepositories"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepositories"

import {ISpecificationsRepository} from "@modules/cars/repositories/ISpecificationsRespositories"
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepositories"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository"

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository"

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

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)