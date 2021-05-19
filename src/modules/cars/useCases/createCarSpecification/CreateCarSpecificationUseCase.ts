import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRespositories";
import { AppError } from "@shared/errors/AppError";

interface  IRequest {
    car_id: string;
    specifications_id: string[]
}


@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,

        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationsRepository
    ){}

    async execute({ car_id, specifications_id}: IRequest): Promise<Car> {
        const carExist = await this.carsRepository.findById(car_id)

        if(!carExist){
            throw new AppError("car does not exist!")
        }

        const specifications = await this.specificationsRepository.findByIds(specifications_id)

        carExist.specifications = specifications

        await this.carsRepository.create(carExist)

        return carExist
    }
}

export {CreateCarSpecificationUseCase}