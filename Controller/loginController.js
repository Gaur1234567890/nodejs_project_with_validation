const { Student } = require("../model/register");
const jwt = require('jsonwebtoken')
const env = require('dotenv')
const bcrypt = require('bcrypt')

env.config()
let loginController = (req,res)=>{
         // email is exist
          
         Student.findOne({email: req.body.email}).
         then(d=>{
            if(d == null)
                {
                    res.status(403).json({
                        msg:'invalid credentials',
                        data:d
                    })
                }
                else{
                    
                     // compare password
                     if(bcrypt.compareSync(req.body.password,d.password))
                        {
                            var token = jwt.sign({role:d.role,data:req.body},process.env.JWT_SECRET_KEY)
                            console.log('login successfully')
                            res.status(200).json({
                                msg:'login successfully',
                                token:token
                            })
                        }
                        else{
                            res.status(403).json({
                                msg:'invalid credentials'
                            })
                        }
                }
         }).catch(e=>{
   res.status(404).json({msg:'invalid credentials'})
         })
}
module.exports ={loginController}