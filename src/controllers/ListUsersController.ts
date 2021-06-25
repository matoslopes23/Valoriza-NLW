import { Request, Response } from "express";

import { ListUserService } from '../services/ListUserService'

class ListUsersController {

    async handle(request:Request, response:Response){
        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        return response.json(users)
    }

}

export { ListUsersController }