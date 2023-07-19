import React from 'react'
import { Button, Checkbox, Form, Input,Typography,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getProviders } from 'next-auth/react';
const { Text, Link } = Typography;

const LoginComponent = ({session,callbackUrl,csfrToken}) => {
  const [providers, setProviders] = React.useState(null);
  const router=useRouter()
  React.useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();

  }, []);
  console.log('providers',csfrToken)
  
  const [isLoading,setIsLoading]=React.useState(false)
  const [message,setMessage]=React.useState('')
  const onFinish = async(values) => {
    console.log('Success:', values);
    
      setIsLoading(true)
      let options={
        redirect:false,
        email:values.email,
        password:values.password
      }
      const res=await signIn("credentials",options);
      setMessage("")
      setIsLoading(false)
      if(res?.error){
        setIsLoading(false)
        setMessage(res?.error)
      }else{
        return router.push(callbackUrl || '/')
      }
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <><Spin spinning={isLoading} indicator={<LoadingOutlined style={{fontSize:'28px'}} />}>
            <div class="content-box">
              <div>
                <h5>LOGIN <span class="bg-theme-blue"></span></h5>
                <p class="font-md content-color">How do i get access order,wishlist and recomendation ?</p>
                <Form
                  className=''
                  name="basic"
                  layout='vertical'
                  initialValues={{
                    remember: true,
                  }}
                  
                  method='post'
                  action='/api/auth/signin/email'
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <input type='hidden'
                  name='csrfToken'
                  defaultValue={csfrToken}
                  />
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
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
                    <a class="forgot-link" href="#" onClick={()=>router.push('auth/forgotPassword')}>Forgot Password?</a>
                  </Form.Item>


                  <Form.Item>
                    <Button block={true} size='large' className='btn-solid rounded-pill line-none' type="primary" htmlType="submit">

                      Signin
                      <i class="arrow"></i>
                    </Button>
                  </Form.Item>
                  <a href="index.html" class="btn-solid rounded-pill line-none btn-outline mt-3 d-flex justify-content-center">Home <i class="arrow"></i></a>
                </Form>

                <div>{message&&<Text type="danger">{message}</Text>}</div>
                <span class="backto-link font-default content-color text-decoration-none">If you are new, <a class="text-decoration-underline theme-color" href="register.html"> Create Now </a> </span>
                <span class="line"><span>Or </span> </span>
                <div class="link-group">
                  {providers!==null?
                  <>
                  <a  href="#" onClick={()=>signIn(providers.google.id)} class="button-link"><img src="/icons/png/google.png" alt="google" /> Sign in with {providers.google.id} </a>
                  <a href="#" onClick={()=>signIn(providers.facebook.id)} class="button-link"><img src="/icons/png/fb.png" alt="facebook" /> Sign in with {providers.facebook.id} </a>
                  </>
                  :<></>}
                  
                  
                </div>
              </div>
            </div>
            </Spin>
    </>
  )
}

export default LoginComponent

