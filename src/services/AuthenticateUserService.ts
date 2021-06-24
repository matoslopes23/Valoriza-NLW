import { getCustomRepository } from "typeorm"

import { compare  } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepositores } from "../repositories/UserRepositories"


interface IAutenticateRequest {
    email:string;
    password:string;
}

class AuthenticateUserService {

    async execute({email, password}:IAutenticateRequest){
        const userRepositores = getCustomRepository(UserRepositores);

        // verificar se email existe
        const user = await userRepositores.findOne({email});

        if(!user){
            throw new Error("Email or password incorret")
        }

        // verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email or password incorret");
        }

        // gerar o token 
        const token = sign({
            email:user.email
        }, "3db999e87fb45628b8bbe328027e738e", {
            subject:user.id,
            expiresIn:"1d"
        } );

        return token;

    }
}
export { AuthenticateUserService }