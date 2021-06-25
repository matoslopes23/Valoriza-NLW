import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";

interface IPayload {
    sub:string;
}

export function ensureAuthenticated(request:Request, response:Response, next:NextFunction) {

    //  receber o token
   const authtoken = request.headers.authorization;

   
   
   // Validar se token esta preenchido
   if(!authtoken){
       return response.status(401).end();
   } 

   const [,token]  = authtoken.split(" ");
   try {
       // validar se token é valido
       const { sub } = verify(token,"3db999e87fb45628b8bbe328027e738e") as IPayload;
       
       // recuperar informações de usuário 
        request.user_id = sub;
       
       return next();
   } catch (error) {
       return response.status(401).end();
   }
   
   
   
}