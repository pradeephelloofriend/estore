import React from 'react'
import { User } from 'react-feather';
import { useRouter } from 'next/router';
const UserIconComponent = () => {
    const router=useRouter()
  return (
      <div class="dropdown user-dropdown">
          <a href='#'><User/></a>
          <ul class="onhover-show-div">
              <li><a onClick={()=>router.push('/api/auth/signin')} href="#">Login</a></li>
              <li><a href="#" onClick={()=>router.push('/api/auth/signin')}>Register</a></li>
          </ul>
      </div>
  )
}

export default UserIconComponent