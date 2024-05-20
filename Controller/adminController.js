const { validationResult } = require("express-validator");
const { Student } = require("../model/register")
const bcrypt = require('bcrypt')

let adminController = (req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty())
      {
          res.status(400).json({errors : errors.array()})
      }
      else{
           // encryption password
         saltpassword = 10;
        let encrypted = bcrypt.hashSync(req.body.password,saltpassword);
        req.body.password = encrypted;

            // schema to save data
        let StudentObject = new Student(req.body);
        StudentObject.save().then(d=>{
          res.status(200).json({msg:'Registration successfully',
          data:d
          })
        }).catch(e=>{
          res.status(400).json({msg:'data not saved in mongodb',
              data :e
          })
        })
    }    
}

module.exports = {adminController}