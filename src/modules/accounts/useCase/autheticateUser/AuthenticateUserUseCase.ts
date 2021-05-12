import { inject, injectable } from "tsyringe";
import { sign} from "jsonwebtoken"
import {compare} from "bcryptjs"

import { IUsersRepository } from "../../repositories/IUsersRepository";



interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new Error("Email or password incorrect!")
        }

        const passwordMatch = compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email or password incorrect!")
        }

        const token = sign({}, "4ee2965e01514d021d3c82feeeb0a5f8", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export {AuthenticateUserUseCase}