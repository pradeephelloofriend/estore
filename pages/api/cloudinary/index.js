import nc from 'next-connect';
import cloudinary from 'cloudinary';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import fs from 'fs';


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRETE,
})

const handler= nc().use(
    fileUpload({
        useTempFiles:true

    })
);
export const config={
    api:{
        bodyParser:false
    }
}
handler.post(async(req,res)=>{
    try {
        
        //const {file}=req.body
        //console.log('files',file)
        const {upload_preset}=req.body
        //console.log('body',upload_preset)
        let files=Object.values(req.files).flat()
        //console.log('files',files)
       let images=[];
       for (let i = 0; i < files.length; i++) {
        const element = files[i];
        const img=await uploadCloudinaryImage(element,upload_preset)
        //console.log('result',img)
        images.push(img)
        removeTemp(element.tempFilePath)
       }
       
        //console.log('result1',images)
        res.json(images)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})
handler.delete(async(req,res)=>{
    let image_id=req.body.public_id;
    cloudinary.v2.uploader.destroy(image_id,(err,res)=>{
        if(err) return res.status(400).json({
            success:false,err
        })
        res.json({success:true})
    })
})
const uploadCloudinaryImage=async(file,path)=>{
    return new Promise((resolve)=>{
        let arr=[]
        cloudinary.v2.uploader.upload(file.tempFilePath,{
            upload_preset:path,
        },(err,res)=>{
            if (err){
                removeTemp(file.tempFilePath)
                return res.status(400).json({message:"upload image failed"})

            }
            resolve({
                url:res.secure_url,
                public_url:res.public_id
            })
            
        })
    })
}
const removeTemp=(path)=>{
    fs.unlink(path,(error)=>{
        if(error) throw error;
    })
}
export default handler
