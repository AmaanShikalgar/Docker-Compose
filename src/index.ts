import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {

    const data = await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.post("/", async(req, res) => {

    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
        password: Math.random().toString()
        }
    })

    res.json({
        "message": "post endpoint"
    })
})
console.log("Server running on port 3000")
app.listen(3000);