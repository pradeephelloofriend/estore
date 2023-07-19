import ForgetPasswordComponent from '@/components/login/ForgetPasswordComponent'
import React from 'react'
import {Card} from 'antd'

const forgotPassword = () => {
    
  return (
    
    <>
    <section class="page-body p-0 fg-pwd">
      <div className='container'>
      <div class="row  ratio_asos">
          <div class="order-2 order-lg-1 col-lg-6">

          <ForgetPasswordComponent/>
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

export default forgotPassword
