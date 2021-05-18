const userSignup = require("../models/signup");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.loginUser=(req,res)=>{
    userSignup.find({ email: req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1) {
            return res.status(401).json({
            message:'Authentication failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
            if(err){
                return res.status(401).json({
                 message:'Authentication failed'
                });
            }
            if(result){
               const token = jwt.sign({
                    email:user[0].email,
                    userId:user[0]._id
                },process.env.JWT_KEY,
                {
                    expiresIn:"1h"
                }
                );
                return res.status(200).json({
                message:"Authentication successfull",
                token:token
                })
            }
            else{
                res.status(401).json({
                 mesaage:'Authentication failed'
                })
            }  
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
        error:err
        });
    });
}