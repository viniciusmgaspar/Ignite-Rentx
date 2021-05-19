import { container } from "tsyringe";
import { Request, Response } from "express";
import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFiles {
    filename: string
}

class UploadCarImagesController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const images = request.files as IFiles[]

        const uploarCarImageUseCase = container.resolve(UploadCarImagesUseCase)

        const images_name = images.map(file => file.filename)

        await uploarCarImageUseCase.execute({
            car_id: id,
            images_name,
        })

        return response.status(200).send()
    }
}

export {UploadCarImagesController}