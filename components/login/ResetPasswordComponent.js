
import React from 'react'
import { Button, Checkbox, Form, Input,Typography,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getProviders } from 'next-auth/react';
const { Text, Link } = Typography;

const ResetPasswordComponent = ({user_id}) => {
  console.log('user_id',user_id)
  const router=useRouter()
  
  
  const [isLoading,setIsLoading]=React.useState(false)
  const [message,setMessage]=React.useState('')
  const [er,setEr]=React.useState("")
  const[suc,setSuc]=React.useState("")
  const onFinish = async(values) => {
    console.log('Success:', values);
   //setIsLoading(true)
   try {
    setIsLoading(true)
    const {data}=await axios.put('/api/auth/reset',{user_id:user_id.id,password:values.password})
    console.log('day',data)
    let options={
      redirect:false,
      email:data.email,
      password:values.password
    }
    await signIn("credentials",options);
    router.push('/')
    setSuc('')
    setIsLoading(false)
   } catch (error) {
    setIsLoading(false)
    setEr(error.response.data.message)
    
   }
      
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <><Spin spinning={isLoading} indicator={<LoadingOutlined style={{fontSize:'28px'}} />}>
            <div class="content-box">
              <div>
              <h5>RESET PASSWORD <span class="bg-theme-blue"></span></h5>
                <p class="font-md content-color">Online Supermarket for all your daily needs. </p>
                <Form
                  className=''
                  name="basic"
                  layout='vertical'
                  initialValues={{
                    remember: true,
                  }}
                  
                  
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  
                  <Form.Item
                    label="Enter password to reset"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>



                  <Form.Item>
                    <Button block={true} size='large' className='btn-solid rounded-pill line-none' type="primary" htmlType="submit">

                    Send Link
                      <i class="arrow"></i>
                    </Button>
                  </Form.Item>
                  
                </Form>
                <a href="#" onClick={()=>router.push('/api/auth/signin')} class="backto-link font-default theme-color">Back to login</a>
                <div>{er&&<Text type="danger">{er}</Text>}</div>
                <div>{suc&&<Text type="success">{suc}</Text>}</div>
                
              </div>
            </div>
            </Spin>
    </>
  )
}

export default ResetPasswordComponent


