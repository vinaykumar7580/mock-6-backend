const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { boardRouter } = require("./routes/board.routes")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/board",boardRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("mongo db connected")

    }catch(err){
        console.log(err)

    }
    console.log("server running on port 8080")
})