import { Button } from 'antd'
import React from 'react'
import { CloseCircleOutlined  } from '@ant-design/icons';
const Images = ({images,setImages}) => {
    const inputRef=React.useRef(null)
    const [error,setError]=React.useState("")
    const handleImages=(e)=>{
        let files=Array.from(e.target.files)
        console.log('files',files)
        files.forEach((img,i)=>{
            if (images.length==3|| i==2) {
                setError('Maximum 3 images allowd')
                return;
            }
            if(img.type!=="image/jpeg" && img.type!=="image/png" && img.type!=="image/jpg"){
                setError(`${img.name} format is unsuported ! only jpeg,jpg,png are allowed.`)
                 files= files.filter((item)=>item.name!==img.name)
                return;
            }else if(img.size>1024*1024*5){
                setError(`${img.name} size is too large,max 5mb allowd`)
                files= files.filter((item)=>item.name!==img.name)
                return;
            }else{
                setError("")
                const reader=new FileReader();
                reader.readAsDataURL(img)
                reader.onload=(e)=>{
                    setImages((images)=>[...images,e.target.result])
                }

            }
        })

    }
  return (
    <div>
        <input type='file' 
        ref={inputRef} 
        hidden 
        onChange={handleImages} 
        multiple 
        accept='image/png,image/jpg,image/jpeg'
        />
        <Button onClick={()=>inputRef.current.click()}>Add Images</Button>
        {error&& <p className='text-danger'>{error}</p>}
        <div className='rv-img-box'>
            {images.length>0 && 
            images.map((img,i)=>
            <span key={i}>
                <CloseCircleOutlined className='img-x-icon' />
                <img src={img} alt=''/>
            </span>
            )
            }
        </div>
    </div>
  )
}

export default Images