import LoginComponent from '@/components/login/LoginComponent'
import RegisterComponent from '@/components/login/RegisterComponent'
import React from 'react'
import {Card} from 'antd'
import { getCsrfToken, getSession } from 'next-auth/react'
export async function getServerSideProps(context){
  const{req,query}=context;
  const session= await getSession({req});
  const {callbackUrl}=query;

  if(session){
    return{
      redirect:{
        destination:callbackUrl
      }
    }
  }
  const csfrToken=await getCsrfToken(context)
  return{
    props:{session,callbackUrl,csfrToken}
  }
}
const login = ({session,callbackUrl,csfrToken}) => {
  return (
    <>
    <section class="page-body p-0">
      <div className='container'>
      <div class="row  ratio_asos">
          <div class="order-2 order-lg-1 col-lg-6">

          <LoginComponent session={session}  callbackUrl={callbackUrl} csfrToken={csfrToken}/>
          </div>
          <div class="order-2 order-lg-1 col-lg-6">
            <Card>
              <RegisterComponent/>
            </Card>
            

          </div>
        </div>
      </div>
        
    </section>
    
    </>
  )
}

export default login