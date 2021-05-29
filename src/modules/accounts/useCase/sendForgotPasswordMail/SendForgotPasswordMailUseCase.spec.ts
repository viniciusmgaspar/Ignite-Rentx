import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory"
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/In-Memory/MailProviderInMemory"
import { AppError } from "@shared/errors/AppError"
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let dateProvider: DayjsDateProvider
let userTokenRepositoryInMemory: UsersTokensRepositoryInMemory
let mailProvider: MailProviderInMemory

describe("Send forgot mail", ()=> {

    beforeEach(()=> {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        dateProvider = new DayjsDateProvider()
        userTokenRepositoryInMemory = new UsersTokensRepositoryInMemory()
        mailProvider = new MailProviderInMemory()

        sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
            usersRepositoryInMemory,
            userTokenRepositoryInMemory,
            dateProvider,
            mailProvider
            )
    })

    it("should be able to send a forgot password mail to user",async ()=> {
        const sendMail = spyOn(mailProvider, "sendMail")

        await usersRepositoryInMemory.create({
            driver_license: "332404",
            email: "nanezvul@ezhomda.au",
            name: "nane",
            password: "1234"
        });

        await sendForgotPasswordMailUseCase.execute("nanezvul@ezhomda.au")

        expect(sendMail).toHaveBeenCalled()
    })

    it("should not be able to send an email if user does not exists",async ()=> {

        await expect(
            sendForgotPasswordMailUseCase.execute("test@test.com.br")
        ).rejects.toEqual(new AppError("User does not exists!"))
    })

    it("should be able to create an users token",async ()=> {
        const generateTokenMail = spyOn(userTokenRepositoryInMemory, "create")
        
        await usersRepositoryInMemory.create({
            driver_license: "332a04",
            email: "nasdasdasd@ezhomda.au",
            name: "nane",
            password: "1234"
        });

        await sendForgotPasswordMailUseCase.execute("nasdasdasd@ezhomda.au")

        expect(generateTokenMail).toHaveBeenCalled()

    })
})