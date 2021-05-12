import {CreateSpecificationUseCase} from "./CreateSpecificationUseCase"

import {SpecificationRepository} from "../../repositories/implementations/SpecificationsRepositories"
import { CreateSpecificationController } from "./CreateSpecificationController"




const spceficationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(spceficationRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export{createSpecificationController}