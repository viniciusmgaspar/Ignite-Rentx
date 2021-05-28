import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memoy/CarsRepositoryInMemory"
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memoy/SpecificationRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"



let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory
let specificationRepositoryInMemory: SpecificationRepositoryInMemory

describe("Create car specification", ()=>{
    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        specificationRepositoryInMemory= new SpecificationRepositoryInMemory()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationRepositoryInMemory)
    })

    it("should not be able to add a new specification to a non-existent car", async () => {
        const car_id = "1234"

        const specifications_id = ["54321"]
        
        await expect(createCarSpecificationUseCase.execute({car_id, specifications_id})
        ).rejects.toEqual(new AppError("car does not exist!"))
    })

    it("should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            brand: "Brand",
            name: "nameCar",
            description: "descriptionCar",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            category_id: "category"
        })

        const specification = await specificationRepositoryInMemory.create({
            description: "description_test",
            name: "name_test"
        })
        

        const specifications_id = [specification.id]

        const spec_Car = await createCarSpecificationUseCase.execute({car_id: car.id, specifications_id})

        expect(spec_Car).toHaveProperty("specifications")
        expect(spec_Car.specifications.length).toBe(1)
    })
})