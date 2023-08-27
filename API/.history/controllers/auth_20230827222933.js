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


    }catch(error){

    }
}