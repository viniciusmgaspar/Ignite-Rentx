import { getRepository, Repository } from "typeorm"
import {ICreateSpecificationDTO,ISpecificationsRepository} from "../ISpecificationsRespositories"
import { Specification } from "../../entities/Specification"



class SpecificationRepository implements ISpecificationsRepository{
    private repository: Repository<Specification>


    constructor(){
        this.repository = getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({name, description})

        await this.repository.save(specification)
    }
    
    async findByName(name:string): Promise<Specification> {
        const specification = this.repository.findOne({name})
        return specification
    }
}

export{SpecificationRepository}