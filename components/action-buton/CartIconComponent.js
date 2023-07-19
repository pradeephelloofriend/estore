import React from 'react'
import { ShoppingBag,ArrowRight,Plus,Minus,X} from 'react-feather';
const CartIconComponent = () => {
  return (
      <div class="dropdown shopingbag">
          <a href="javascript:void(0)" class="cart-button"><ShoppingBag/> <span class="notification-label">3</span></a>
          <a href="javascript:void(0)" class="overlay-cart overlay-common"></a>
          <div class="onhover-cart-dropdown">
              <div class="onhover-show-div">
                  <div class="dropdown-header">
                      <div class="control">
                          <a href="cart.html">Shopping Cart</a>
                          <ArrowRight class="back-cart"/>
                          
                      </div>
                  </div>

                  <div class="card-wrap custom-scroll">
                      
                      <div class="cart-card media">
                          <a href="product.html"> <img src="/images/fashion/product/front/8.jpg" class="img-fluid" alt="product" /> </a>
                          <div class="media-body">
                              <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                              <span>$120.00</span>
                              <div class="plus-minus">
                                <Minus class="sub"/>
                                <input type="number" value="1" min="1" max="10" />
                                <Plus class="add"/>
                                  
                              </div>
                          </div>
                          <X class="remove-cart"/>
                         
                      </div>
                    

                     

                     
                  </div>
                  <div class="dropdown-footer">
                      <div class="freedelevery">
                          <p class="terms-condition">FREE SHIPPING! Continue Shopping to add more product to you cart and receive free shipping for orders over <strong>$500</strong></p>
                          <div class="progress">
                              {/*<div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>*/}
                          </div>
                      </div>
                      <div class="total-price">
                          <span>Total</span>
                          <span>$450</span>
                      </div>

                      <div class="btn-group block-group">
                          <a href="cart.html" class="btn-solid">View Cart</a>
                          <a href="payment.html" class="btn-outline">Checkout</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CartIconComponent