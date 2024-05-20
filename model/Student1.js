const { mongoose } = require("../config/db");

let studentschema = new mongoose.Schema({
    firstname : {type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String , required:true,unique:true}
})

let Student1 = mongoose.model('DATA',studentschema)

module.exports ={Student1}