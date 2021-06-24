import { getCustomRepository } from 'typeorm'
import { UserRepositores } from "../repositories/UserRepositories"

import { hash } from 'bcryptjs';


interface IUserRequest {
    name:string;
    email: string;
    admin?: boolean;
    password:string;
}
class CreateUserService {

    async execute({name, email, admin = false, password}:IUserRequest) {
        const userRepositores = getCustomRepository(UserRepositores);
        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await userRepositores.findOne({
            email,
        });

        if(userAlreadyExists){
            throw new Error("User alread exist");
        }
        const passwordHash = await hash(password, 8)

        const user = userRepositores.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await userRepositores.save(user);
        return user;

    }
}

export {CreateUserService}