import { inject, injectable } from "tsyringe";
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

interface Irequest {
    car_id: string;
    images_name: string[]

}

@injectable()
class UploadCarImagesUseCase {

    constructor(
        @inject("CarsImagesRepository")
        private carsImagesRepository: ICarsImageRepository,

        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ){ }


    async execute({car_id, images_name}: Irequest): Promise<void>{
        images_name.map( async (image) => {
            await this.carsImagesRepository.create(car_id, image)
            await this.storageProvider.save(image, "cars")
        })
    }
}

export {UploadCarImagesUseCase}