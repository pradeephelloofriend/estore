
import React from 'react'
import {Card} from 'antd'
import ResetPasswordComponent from '@/components/login/ResetPasswordComponent'
import jwt from 'jsonwebtoken'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context){
  const{query,req}=context
  const session=await getSession({req})
  if (session) {
    return{
      redirect:{
        destination:"/"
      }
    }
  }
  const token=query.token
  const user_id=jwt.verify(token,process.env.RESET_TOKEN_SECRETE)
  return{
    props:{user_id}
  }
}
const reset = ({user_id}) => {
    
  return (
    
    <>
    <section class="page-body p-0 fg-pwd">
      <div className='container'>
      <div class="row  ratio_asos">
          <div class="order-2 order-lg-1 col-lg-6">

          <ResetPasswordComponent user_id={user_id}/>
          </div>
          <div class="order-2 order-lg-1 col-lg-6">
            <Card className='img-box'
              cover={<img alt="example" src="/images/banner.jpg" />}
            >
        
            </Card>
          </div>
        </div>
      </div>
        
    </section>
    
    
    </>
  )
}

export default reset