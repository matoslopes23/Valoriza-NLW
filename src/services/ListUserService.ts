import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UserRepositores } from "../repositories/UserRepositories"


class ListUserService {

    async execute(){
        const userRepositories = getCustomRepository(UserRepositores);

        const users = await userRepositories.find();

        return classToPlain(users);
    }
}

export { ListUserService }