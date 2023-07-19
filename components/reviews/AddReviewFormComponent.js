import React from 'react'

import { Button, Checkbox, Form, Input } from 'antd';

import ReactStars from "react-rating-stars-component";

import { uploadImages } from '@/request/upload';
import axios from 'axios';
import ImageUploadButtonComponent from './ImageUploadButtonComponent';
import { useSession } from 'next-auth/react';
const { TextArea } = Input;
const AddReviewFormComponent = ({item,setRvData}) => {
    const{data:session}=useSession()
    //console.log('session',item)
    const [form] = Form.useForm();
    const[images,setImages]=React.useState([])
    const [fileList, setFileList] = React.useState([]);
    const[rating,setRating]=React.useState(0)
    const[review,setReview]=React.useState("")
    let upload_images=[]
    
    const ratingChanged = (newRating) => {
        setRating(newRating)
        //console.log(newRating);
      };
      const onFinish = async(values) => {
        console.log('Success:', values);
        if (fileList.length>0) {
        
            //formData.append("path",path)
            for (let i = 0; i < fileList.length; i++) {
                const element = fileList[i];
                const res=await uploadImages(element.originFileObj)
                upload_images.push(res)
            }
            //console.log('temp',upload_images)
        }
        
        const {data} =await axios.put(`/api/products/${item._id}/review`,{
            rating:rating,
            desc:review,
            images:upload_images,
            user:session.user
        })
        console.log('review-result',data)
        
       // var obj = JSON.parse(data);
       // const tempRData=[]
        //tempRData.push(obj)
        //console.log('review-result1',data)
        setRvData(data)
        //setReview(data.reviews)
        setFileList([])
        setRating(0)
        setReview("")
        //form.resetFields('review')

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      console.log('images',fileList)
    return (
        <>
            <div class="replay-form round-wrap-content top-space" >
                <div class="title-box4">
                    <h4 class="heading">Leave a Comment<span class="bg-theme-blue"></span></h4>
                    {session?
                    <div className='add-form'>
                    <div class="rat-box">
                        <label>How would you rate it?</label>
                        <ReactStars
                            count={5}
                            value={rating}
                            
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <label>Share your photo</label>
                    <ImageUploadButtonComponent fileList={fileList} setFileList={setFileList}/>
                    
                    <Form
                        name="basic"

                        initialValues={{
                            remember: true,
                        }}
                        layout={"vertical"}
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Write your review"
                            name="review"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <TextArea value={review} onChange={(e)=>setReview(e.target.value)} rows={4} />
                        </Form.Item>





                        <Form.Item >
                            <Button disabled={rating==0 || review=="" || fileList.length<1?true:false} type="primary" htmlType="submit">
                                Submit Review
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                    :
                    <h4 className='text-danger'>Please Login to submit your review</h4>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default AddReviewFormComponent