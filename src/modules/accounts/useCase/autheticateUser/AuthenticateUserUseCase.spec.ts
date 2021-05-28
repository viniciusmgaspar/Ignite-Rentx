import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory"
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory
let dateProvider: DayjsDateProvider
let createuserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory()
        dateProvider = new DayjsDateProvider()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory, userTokensRepositoryInMemory, dateProvider)
        createuserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        }

        await createuserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        })

        expect(result).toHaveProperty("token")
    })  

    it("should not be able to authenticate an non-existent user", async () => {
        await expect(authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "false password",
            })            
        ).rejects.toEqual(new AppError("Email or password incorrect!"))
    })

    it("should not be able to authenticate with incorrect password", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        }

        await createuserUseCase.execute(user);
        
        await expect(authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "false password",
            })            
        ).rejects.toEqual(new AppError("Email or password incorrect!"))
        

    })
})
    