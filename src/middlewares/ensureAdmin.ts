import { Request, Response, NextFunction } from "express";
import { UserRepositores } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export async function esureAdmin(request:Request, response:Response, next:NextFunction){

    const { user_id } = request;

    const userRepositories = getCustomRepository(UserRepositores);

    const {admin } = await userRepositories.findOne(user_id);

    // Verificar se usuario admin

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    })

}