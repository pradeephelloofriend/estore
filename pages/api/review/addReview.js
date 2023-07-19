import nc from 'next-connect'

import db from '@/utils/db';

import Review from '@/models/xxx';

const handler=nc();

handler.post(async(req,res)=>{
    try {
      await db.connectDb() 
      const{imgUrl,rating,desc,userId}=req.body;
      //console.log(req.body) 
      if (!rating|| !desc) {
        return res.status(400).json({message:"please fill all the field"})
      }
      const newReview= new Review({reviewBy:userId,rating:rating,review:desc,images:imgUrl})
      await newReview.save((err, doc)=>{
        if (!err){
            res.json({message:"Reviews Added",})
        }
        else
        res.status(500).json({message:"Reviwes insert error"})
    
      })
      
      await db.disconnectDb()
      
      //res.send(url)
     //res.end();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    //res.send('welcome to singup api')
})

export default handler