import { inject, injectable } from "tsyringe";

import {ICategoriesRepository} from "../../repositories/ICategoriesRepositories"
import { Category } from "../../entities/Category"



@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}
        
    async execute(): Promise<Category[]>{
        const categories = await this.categoriesRepository.list();

        return categories
        
    }
}

export{ ListCategoriesUseCase}