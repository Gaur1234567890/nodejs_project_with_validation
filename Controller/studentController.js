const { Student1 } = require("../model/Student1")


let studentController = (req,res)=>{
    const object = new Student1(req.query)
    object.save().then(d=>{
        res.status(200).json({
            msg:'record successfully inserted in mongodb',
            data:object
        })
    }).catch(e=>{
        res.status(400).json({
            msg:'not saved data in mongodb',
            error:e
        })
    })
}

// find the student in db


let studentFind = async(req,res)=>{
    
    try{
       const {id} = req.params;
       console.log(req.params);
       const data = await Student1.findById(id);
       res.status(200).json({
        studentdata : data
       })
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }

 }

 // update the student in db

 
 let studentUpdate = async(req,res)=>{
    try{
       const {id} = req.params;
       const result = await Student1.findByIdAndUpdate(id,req.query)
       if(!result){
        res.status(404).json({msg:'student not found'})
       }
       else{
       res.status(200).json({
        msg : 'updated successfully',
        data:result
       })
    }
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }

 }

 // delete the data of student in mongodb

 
 let studentDelete = async(req,res)=>{
    try{
       const {id} = req.params;
       const result = await Student1.findByIdAndDelete(id)
       if(!result){
        res.status(404).json({msg:'student not found'})
       }
       else{
       res.status(200).json({
        msg : 'deleted successfully',
        data:result
       })
    }
    }
    catch{
        res.status(400).json({
            msg : 'please fill valid id'
           })
    }
}


module.exports = {studentController,studentUpdate,studentFind,studentDelete}