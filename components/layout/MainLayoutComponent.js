import React from 'react'
import FooterComponent from '../footer/FooterComponent'
import HeaderComponent from '../header/HeaderComponent'
import { useSession,signIn,signOut } from "next-auth/react"
const MainLayoutComponent = ({children}) => {
  const{data:session}=useSession()
  console.log('session',session)
  return (
    <>
      <HeaderComponent session={session}/>
      <main class="main">
          {children}
      </main>
      <FooterComponent/>
    </>
  )
}

export default MainLayoutComponent