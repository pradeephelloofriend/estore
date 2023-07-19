import React from 'react'
import { Heart } from 'react-feather';
const WhislistIconComponent = () => {
  return (
      <div class="dropdown whislist-dropdown">
          <a href="javascript:void(0)"><Heart/> <span class="notification-label">0</span></a>
          <div class="onhover-show-div">
              <a href="wishlist.html"> <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/box.svg" class="img-fluid" alt="box" /> </a>
              <div class="content">
                  <a href="wishlist.html">
                      <h6>Your wishlist empty !!</h6>
                      <p>explore more and shortlist items.</p>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default WhislistIconComponent