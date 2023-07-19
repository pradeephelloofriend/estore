import nc from 'next-connect'
import bcrypt from 'bcrypt'
import { validateEmail } from '@/utils/validation';
import db from '@/utils/db';
import User from '@/models/user';
import { createActivationToken } from '@/utils/token';
import { sendEmail } from '@/utils/sendEmail';
import { activateEmailTemplate } from '@/email/activateEmailTemplate';
const handler=nc();

handler.post(async(req,res)=>{
    try {
      await db.connectDb() 
      const{name,email,password}=req.body;
      //console.log(req.body) 
      if (!name || !email || !password) {
        return res.status(400).json({message:"please fill in the field"})
      }
      if (!validateEmail(email)) {
        return res.status(400).json({message:"invalid email"})
      }

      const user= await User.findOne({email})
      if (user) {
        return res.status(400).json({message:"This email allready exist"})
      }
      if (password.length < 6) {
        return res.status(400).json({message:"password must be atleast 6 charcter"})
      }

      const cryptPassword= await bcrypt.hash(password,12)

      const newUser= new User({name,email,password:cryptPassword})
      const addUser=await newUser.save()
      const activation_token=createActivationToken({
        id:addUser._id.toString(),
      })
      //console.log(activation_token)
      const url=`${process.env.BASE_URL}/activate/${activation_token}`
      sendEmail(email,url,"","Activate your account",activateEmailTemplate)
      await db.disconnectDb()
      res.json({message:"Registerd successfully,please activate your email to start",})
      //res.send(url)
     //res.end();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    //res.send('welcome to singup api')
})

export default handler