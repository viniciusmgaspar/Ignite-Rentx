import { AppError } from "../../../../shared/errors/AppError"
import { CategoriesRepositoryInMemoy } from "../../repositories/in-memoy/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategory: CreateCategoryUseCase
let categoriesRepositoryInMemoy: CategoriesRepositoryInMemoy

describe("Create Category", ()=> {
    beforeEach(()=>{
        categoriesRepositoryInMemoy = new CategoriesRepositoryInMemoy()
        createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemoy)
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

        const categoryCreated = await categoriesRepositoryInMemoy.findByName(category.name)

        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create a new category with the same name", async ()=> {
        
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category description Test" 
            }    
            await createCategory.execute({
                    name: category.name,
                    description: category.description
                });
            await createCategory.execute({
                name: category.name,
                description: category.description
            });
        }).rejects.toBeInstanceOf(AppError)


    })
})