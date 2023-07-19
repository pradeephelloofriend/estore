import React from 'react'

const HeaderLanguageComponent = () => {
  return (
    <>
    <div class="select-menu">
              <div class="dropdown select-dropdown">
                <button id="unitSelected"><span>USD</span> <i data-feather="chevron-down"></i></button>
                <ul class="onhover-show-div">
                  <li class="unit">USD</li>
                  <li class="unit">EUR</li>
                  <li class="unit">INR</li>
                  <li class="unit">CNY</li>
                </ul>
              </div>
              <div class="dropdown select-dropdown" id="translate">
                <button id="languageSelected"><span>English</span> <i data-feather="chevron-down"></i></button>
                <ul class="onhover-show-div">
                  <li class="lang">English</li>
                  <li class="lang">Chinese</li>
                  <li class="lang">Arabic</li>
                  <li class="lang">Russian</li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default HeaderLanguageComponent