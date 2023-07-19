import React from 'react'
import { Button, Checkbox, Form, Input,Typography,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import Router from 'next/router';
const { Text, Link } = Typography;
const RegisterComponent = () => {
  const [isLoading,setIsLoading]=React.useState(false)
  const [sMsg,setSmsg]=React.useState('')
  const [eMsg,setEmsg]=React.useState('')
    const onFinish = async(values) => {
        console.log('Success:', values);
        try {
          setIsLoading(true)
          const{data}=await axios.post(`/api/auth/signup`,{
            name:values.fname,
            email:values.email,
            password:values.password
          })
          setSmsg(data.message)
          setEmsg("")
          setIsLoading(false)
          /*setTimeout(()=>{
            Router.push('/')
          },2000)*/
        } catch (error) {
          setIsLoading(false);
          setSmsg("")
          setEmsg(error.response.data.message)
        }

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
      <>
      <Spin spinning={isLoading} indicator={<LoadingOutlined style={{fontSize:'28px'}} />}>
          <div class="content-box">
              <div>
                  <h5>CREATE ACCOUNT<span class="bg-theme-blue"></span></h5>
                  <p class="font-md content-color">How do i get access order,wishlist and recommendation ?</p>
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
                    label="Full Name"
                    name="fname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                  >
                    <Input type='email' />
                  </Form.Item>

                  <Form.Item
                    label="Password"
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
                    <a class="forgot-link" href="forgot-password.html">Forgot Password?</a>
                  </Form.Item>


                  <Form.Item>
                    <Button block={true} size='large' className='btn-solid rounded-pill line-none' type="primary" htmlType="submit">

                      SignUp
                      <i class="arrow"></i>
                    </Button>
                  </Form.Item>
                  
                </Form>
                  
                <div>{sMsg&&<Text type="success">{sMsg}</Text>}</div>
                <div>{eMsg&&<Text type="danger">{eMsg}</Text>}</div>
              </div>
          </div>
          </Spin>
      </>
  )
}

export default RegisterComponent