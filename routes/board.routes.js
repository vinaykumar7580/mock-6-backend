const express=require("express")
const { BoardModel } = require("../model/boardmodel")

const boardRouter=express.Router()

boardRouter.post("/add",async(req,res)=>{
    let payload=req.body

    try{
        let board=new BoardModel(payload)
        await board.save()
        res.status(200).send({msg:"New Task Added"})

    }catch(err){
        res.status(400).send(err)
    }
})

boardRouter.get("/",async(req,res)=>{
    let payload=req.query
    try{
        let board=await BoardModel.find(payload)
        res.status(200).send(board)

    }catch(err){
        res.status(400).send(err)
    }
})

module.exports={
    boardRouter
}