import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memoy/CarsRepositoryInMemory"
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"


let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {

    beforeEach(() => { 
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
    })

    it("should be able to list all avaiable cars", async () => {

        const car = await carsRepositoryInMemory.create({
            "name": "Audi A3",
            "brand":"Car_brand",
            "category_id": "e49e2453-8560-4e87-8805-a3d04416ec91",
            "daily_rate": 140,
            "description": "Carro Bonito",
            "fine_amount": 100,
            "license_plate": "ABC-1212"
        })
        

        const cars = await listAvailableCarsUseCase.execute({
            
        })

        expect(cars).toEqual([car])
    })

    it("should be able to list all avaiable cars by brand", async () => {

        const car = await carsRepositoryInMemory.create({
            "name": "Audi A3",
            "brand":"Car_brand_teste",
            "category_id": "e49e2453-8560-4e87-8805-a3d04416ec91",
            "daily_rate": 140,
            "description": "Carro Bonito",
            "fine_amount": 100,
            "license_plate": "ABC-1212"
        })
        

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_brand_teste"
        })  

        expect(cars).toEqual([car])
    })

    it("should be able to list all avaiable cars by name", async () => {

        const car = await carsRepositoryInMemory.create({
            "name": "Car_Teste",
            "brand":"Car_brand_teste",
            "category_id": "e49e2453-8560-4e87-8805-a3d04416ec91",
            "daily_rate": 140,
            "description": "Carro Bonito",
            "fine_amount": 100,
            "license_plate": "ABC-1212"
        })
        

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car_Teste"
        })  

        expect(cars).toEqual([car])
    })

    it("should be able to list all avaiable cars by name", async () => {

        const car = await carsRepositoryInMemory.create({
            "name": "Car_Teste",
            "brand":"Car_brand_teste",
            "category_id": "categoryID",
            "daily_rate": 140,
            "description": "Carro Bonito",
            "fine_amount": 100,
            "license_plate": "ABC-1212"
        })
        

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "categoryID"
        })  

        expect(cars).toEqual([car])
    })
})