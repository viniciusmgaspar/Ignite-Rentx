import {Router} from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle)

/*specificationsRoutes.get("/", (request, response)=>{
   
})*/

export {specificationsRoutes}