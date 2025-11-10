import express from "express";
import {client} from "@repo/db/client"


const app = express();


app.get("/", (req,res)=>{
    res.send("Server is running...")
})

app.use(express.json());

app.post("/signup", async (req,res)=>{
    const {username, password} = req.body;
   const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message: "user register successfully",
        id: user.id
    })

})
app.listen(3002, ()=>{
    console.log("server is listening on port 3000")
})