import React from 'react'
import CartIconComponent from '../action-buton/CartIconComponent'
import SearchButtonComponent from '../action-buton/SearchButtonComponent'
import UserIconComponent from '../action-buton/UserIconComponent'
import WhislistIconComponent from '../action-buton/WhislistIconComponent'
import HeaderLanguageComponent from './HeaderLanguageComponent'
import { signOut } from "next-auth/react"

const HeaderMenuRightComponent = ({session}) => {
  return (
    <div class="menu-right">
        <HeaderLanguageComponent/>
        <ul class="icon-menu">
              <li>
                <SearchButtonComponent/>
              </li>
              
              <li>
                <WhislistIconComponent/>
              </li>
              <li>
                <CartIconComponent/>
              </li>
              <li>
                {session?
                <a href='#' onClick={()=>signOut({ callbackUrl: '/' })}>Logout</a>
                :
                <UserIconComponent/>
                }
                
              </li>
        </ul>
    </div>
  )
}

export default HeaderMenuRightComponent