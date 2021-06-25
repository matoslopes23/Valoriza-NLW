import { Request, Response } from "express";
import { ListTagService } from "../services/LisyTagService";


class ListTagsController {
    async handle( request:Request, response:Response){
        const listTagService = new ListTagService();

        const tags = await listTagService.execute();

        return response.json(tags);
    }
}

export { ListTagsController }