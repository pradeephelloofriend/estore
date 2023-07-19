import nc from 'next-connect'
import bcrypt from 'bcrypt'
import { validateEmail } from '@/utils/validation';
import db from '@/utils/db';
import User from '@/models/user';
import { createActivationToken, createResetToken } from '@/utils/token';
import { sendEmail } from '@/utils/sendEmail';
import { resetEmailTemplate } from '@/email/resetEmailTemplate';
const handler=nc();

handler.put(async(req,res)=>{
    try {
      await db.connectDb() 
      const{user_id,password}=req.body;
      //console.log(user_id.toString())
      const user= await User.findById(user_id)
      console.log('user',user)
      if (!user) {
        return res.status(400).json({message:"This email not exist"})
      }
      const cryptedPassword=await bcrypt.hash(password,12)
      await user.updateOne({
        password:cryptedPassword
      })
      res.json({email:user.email})
      await db.disconnectDb()
     
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    //res.send('welcome to singup api')
})

export default handler