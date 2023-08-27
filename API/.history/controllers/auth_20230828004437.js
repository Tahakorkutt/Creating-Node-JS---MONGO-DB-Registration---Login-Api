const Auth=require("../models/auth.js");
const bcrypt=require("bcrypt.js");
const jwt = require("jsonwebtoken");


const register = async(req,res) => {
    try{
        const{username,email,password} = req.body
        const user = await Auth.findOne({email}) //aynı hesaptan email alamama
        
        if(user){
            return res.status(500).json({message: "bu email hesabı bulunmaktadır."})
        }

        if(password.length<6){
            return res.status(500).json({message: "şifreniz 6 karakterden küçük olmamalı"})
        }

        const passwordHash = await bcrypt.hash(password, 12) //şifreyi güvenli hale getirme durumu

        const newUser = await Auth.create({username, email, password:passwordHash}) // bir kullanıcıyı 
        veritabanına kaydetmek veya oluşturmak amacıyla kullanılan bir işlemi ifade ediyor.

        const userToken = jwt.sign({id:newUser.id}, process.env.SECRET_TOKEN,{expiresIn:"1h"}) ;

        res.status(201).json({
            status:"OK",
            newUser,
            userToken
        })
    }catch(error){
        return res.status(500).json({message: "error.message"})
    }
}

const login = async (req, res) => {
  try {
    const {email,password}= req.body;
    const user = await Auth.find({email: email});
    if(!user){
        return res.status(500).json({message: "böyle bir kullanıcı bulunamadı"})
    }

     const comparePasswor = await bcrypt.compare(password, user.password)
     if(!comparePasswor){
        return res.status(500).json({message: "Parolanız yanlıs"})


     }

     const token = jwt.sign({id: user.id},process.env.SECRET_TOKEN,{expiresIn:"1h"} )

     res.status(200).json({
        status :"OK",
        user,
        token

     })


  }catch(error){


  }
}
