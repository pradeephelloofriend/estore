import nc from 'next-connect'
import bcrypt from 'bcrypt'
import { validateEmail } from '@/utils/validation';
import db from '@/utils/db';
import User from '@/models/user';
import { createActivationToken, createResetToken } from '@/utils/token';
import { sendEmail } from '@/utils/sendEmail';
import { resetEmailTemplate } from '@/email/resetEmailTemplate';
const handler=nc();

handler.post(async(req,res)=>{
    try {
      await db.connectDb() 
      const{email}=req.body;
      const user= await User.findOne({email})
      if (!user) {
        return res.status(400).json({message:"This email not exist"})
      }
      const user_id=createResetToken({
        id:user._id.toString(),
      })
      //console.log(req.body) 
      const url=`${process.env.BASE_URL}/auth/reset/${user_id}`
      sendEmail(email,url,"","Reset your account",resetEmailTemplate)
      await db.disconnectDb()
      res.json({message:"An reset link  has been sent to your email"})
      //res.send(url)
     //res.end();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    //res.send('welcome to singup api')
})

export default handler