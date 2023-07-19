import React from 'react'
import { Search,X } from 'react-feather';
const SearchButtonComponent = () => {
    const[open,setOpen]=React.useState(false)
    //console.log('open',open)
  return (
    <>
    
    <a onClick={()=>setOpen(!open)} href='#'><Search  class="search-button"/></a>
               
                <div class={open?'search-full open':'search-full'}>
                  <div class="input-group">
                    <span class="input-group-text">
                      <Search />
                    </span>
                    <input  type="text" class="form-control search-type" placeholder="Search here.." />
                    <span class="input-group-text close-search">
                      <X onClick={()=>setOpen(!open)}/>
                    </span>
                  </div>

                  
                  <div class="search-suggestion">
                    <ul>
                      <li>
                        <div class="product-cart media">
                          <img src="/images/fashion/product/front/4.jpg" class="img-fluid blur-up lazyload" alt="" />
                          <div class="media-body">
                            <a href="#">
                              <h6>Women’s long sleeve Jacket</h6>
                            </a>
                            <ul class="rating p-0 mb">
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i data-feather="star"></i>
                              </li>
                            </ul>
                            <p class="mb-0 mt-1">$280.00</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="product-cart media">
                          <img src="/images/fashion/product/front/5.jpg" class="img-fluid blur-up lazyload" alt="" />
                          <div class="media-body">
                            <a href="#">
                              <h6>Shirt short mini dresses</h6>
                            </a>
                            <ul class="rating p-0">
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i class="fill" data-feather="star"></i>
                              </li>
                              <li>
                                <i data-feather="star"></i>
                              </li>
                            </ul>
                            <p class="mb-0 mt-1">$35.00</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                
    </>
  )
}

export default SearchButtonComponent