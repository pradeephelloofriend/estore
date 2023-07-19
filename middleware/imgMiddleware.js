
import fs from 'fs';
export const imgMiddleware=(async(req,res,next)=>{
try {
    if (!req.files||Object.keys(req.files.length===0)) {
        return res.status(400).json({message:'no files ware chhosen'})
    }
    let files=Object.values(req.files).flat()
    for (const file of files) {
        if (file.mimetype!=="image/jpeg" &&  file.mimetype!=="image/png" && file.mimetype!=="image/webp") {
            removeTemp(file.tempFile)
            return res.status(400).json({message:'fs wrongile format i'})
        }
        if(file.size>1024*1024*10){
            removeTemp(file.tempFile)
            return res.status(400).json({message:'file size too largde'})
        }
    }
    next()
} catch (error) {
    return res.status(500).json({message:error.message})
}
})
const removeTemp=(path)=>{
    fs.unlink(path,(error)=>{
        if(err) throw err;
    });
}