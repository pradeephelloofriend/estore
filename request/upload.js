import axios from 'axios';


export const uploadImages=async(file)=>{
    console.log('formData',file)
    const formData=new FormData()
    formData.append('file',file)
    formData.append('upload_preset','estore-review')
    
    const {data}=await axios.post(`/api/cloudinary`,formData,{
        headers:{
            "content-type":"multipart/form-data"
        },
    })
    //console.log('upload data',data)
    return data
}