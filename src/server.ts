import express from 'express';

const app = express();

app.get("/", (request, response)=>{

    return response.json({message:"Rola que te passas"})
});

app.post("/test",(request, response)=>{

    return response.json({message:"created"})
})


app.listen(3000, ()=>{ console.log("Server is runner");});