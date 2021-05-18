import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memoy/CarsRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe(" Create car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })



    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            brand: "Brand",
            name: "nameCar",
            description: "descriptionCar",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            category_id: "category"
        })

        expect(car).toHaveProperty("id");
    })


    
    it("should not be able to create a car with exists license plate", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                brand: "Brand",
                name: "nameCar",
                description: "descriptionCar",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                category_id: "category"
            })

            await createCarUseCase.execute({
                brand: "Brand",
                name: "nameCar2",
                description: "descriptionCar",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                category_id: "category"
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should be able to create with available true by default", async () => {

        const car = await createCarUseCase.execute({
            brand: "Brand",
            name: "nameCar",
            description: "descriptionCar",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            category_id: "category",
        })

        expect(car.available).toBe(true)
        
    })

})