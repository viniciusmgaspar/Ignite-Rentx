import {container} from "tsyringe"

import "@shared/container/providers"

import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepositories"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepositories"

import {ISpecificationsRepository} from "@modules/cars/repositories/ISpecificationsRespositories"
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepositories"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository"

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository"
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository"
import { CarsImageRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository"
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepositories"
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository"
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository"
import { UsersTokenRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository"

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

container.registerSingleton<ICarsImageRepository>(
    "CarsImagesRepository",
    CarsImageRepository
)

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
)

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokenRepository
)