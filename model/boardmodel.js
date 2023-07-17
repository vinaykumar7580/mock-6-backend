const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  name: String,
  tasks: [
    {
      title: String,
      description: String,
      status: {
        type: String,
        enum: ["Todo", "Doing", "Done"],
        default: "Todo",
      },
      subtask: [
        {
          title:{
            type:String
          },
          isCompleted:{
            type:Boolean,
            default:false
          }
        },
      ],
    },
  ]
},{
    versionKey:false
})

const BoardModel=mongoose.model("board",boardSchema)

module.exports={BoardModel}
