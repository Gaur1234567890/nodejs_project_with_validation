const jwt = require('jsonwebtoken')
const env = require('dotenv')
env.config()

let authMiddleware = (req,res,next)=>{
    if(req.headers.authorization === undefined)
        {
            res.status(403).json({ msg: 'unauthorized access'})
        }
        else{
            var token = req.headers.authorization.split(' ')[1];
            try{
               var decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
               req.body = decoded;
               next()
            }
            catch(err)
            {
   res.status(403).json({msg:'unauthorized access',
    error:err
   })
            }
        }
}

let adminAuth = (req,res,next)=>{
    if(req.body.role !== 'admin')
        {
res.status(403).json({msg:'not permission'})
        }
        else{
            next()
        }
}

let studentAuth = (req,res,next)=>{
    if(req.body.role === 'student')
        {
            res.status(403).json({msg:'not permission to create student'})
        }
        else{
            next()
        }
}

let allAccess = (req,res,next)=>{
    if(req.body.role =='student' || req.body.role == 'admin' || req.body.role == 'teacher')
        {
            next()
        }
}

module.exports ={authMiddleware,adminAuth,studentAuth,allAccess}