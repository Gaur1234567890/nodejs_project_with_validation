const { mongoose } = require("../config/db");

let StudentSchema = new mongoose.Schema({
    firstname:{type:String , required:true},
    lastname:{type :String, required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String, required:true},
    role:{type:String,
        enum:["teacher","student","admin"],
        default:"student"
    }
},
{
    timestamps:true
})

const Student = mongoose.model('Student',StudentSchema);

module.exports = {Student}