import { AppError } from "../../../../shared/errors/AppError"
import { CategoriesRepositoryInMemoy } from "../../repositories/in-memoy/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategory: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemoy

describe("Create Category", ()=> {
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemoy()
        createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })


    it("should be able to create a new category", async ()=> {
        const category = {
            name: "Category Test",
            description: "Category description Test" 
        }    
        await createCategory.execute({
                name: category.name,
                description: category.description
            });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create a new category with the same name", async ()=> {
        const category = {
            name: "Category Test",
            description: "Category description Test" 
        }    
        await createCategory.execute({
                name: category.name,
                description: category.description
            });

        await expect(createCategory.execute({
                name: category.name,
                description: category.description
            })
        ).rejects.toEqual(new AppError("Category already exists!"))


    })
})