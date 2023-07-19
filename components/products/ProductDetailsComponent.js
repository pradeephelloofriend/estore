import React from 'react'
import RatingComponent from './RatingComponent'
import { Radio,} from 'antd'
import { CheckOutlined } from '@ant-design/icons';
import ProductDescriptionComponent from './ProductDescriptionComponent';

const ProductDetailsComponent = ({item}) => {
    const{colors,sizes}=item
    // for collor
    const [color,setColor]=React.useState(colors[0]._id)
    const onChangeColor = ({ target: { value } }) => {
        //console.log('radio3 checked', value);
        setColor(value);
      };
    //end color
    // for size
    const [size,setSize]=React.useState(sizes[0]._id)
    const[stock,setStocks]=React.useState(sizes[0].qty)
    const onChangeSize = ({ target: { value } }) => {
        //console.log('radio3 checked', value);
        const [st]=sizes.filter(d=>d._id==value).map(x=>x.qty)
        setStocks(st)
        setSize(value);
    };
  return (
      <>
          <section class="product-page">
              <div class="container-lg">
                  <div class="row g-3 g-xl-4 view-product ratio_asos">
                      <div class="col-md-7 grid-img">
                          <div class="row g-2 g-md-3 sticky off-50">
                          {item?.images.map((i,idx)=>
                          <div key={idx} class="col-6">
                          <div class="img-wrap">
                              <div class="img-box">
                                  <img class="bg-img img-fluid" src={`${i.url}`} alt="product" />
                              </div>
                          </div>
                      </div>
                          )}
                              
                             
                          </div>
                      </div>
                      <div class="col-md-5">
                          <div class="product-detail-box sticky">
                              <div class="product-option">
                                  <h2>{item?.name}</h2>

                                  <RatingComponent/>

                                  <div class="option price">
                                  <span>₹{item?.price-item?.discount}</span> <del>₹{item?.price}</del>
                                    </div>

                                  <div class="option">
                                      <p class="content-color">
                                      {item?.description}
                                      </p>
                                  </div>

                                  <div class="option-side">
                                      <div class="option">
                                          <div class="title-box4">
                                              <h4 class="heading">Your Brand Color:<span class="bg-theme-blue"></span></h4>
                                          </div>

                                          <div className='radio-color-block'>
                                            <Radio.Group defaultValue={color} onChange={onChangeColor} buttonStyle="solid">
                                                {colors.map((c,idx)=>
                                                <Radio.Button key={idx}  style={{backgroundColor:c.colorCode}} value={c._id}><CheckOutlined className="uil uil-check" /></Radio.Button>
                                                )}
                                                
                                            </Radio.Group>
                                        </div>
                                      </div>

                                      <div class="option">
                                          <div class="title-box4">
                                              <h4 class="heading">Quantity: <span class="bg-theme-blue"></span></h4>
                                          </div>

                                          <div class="plus-minus">
                                              <i class="sub" data-feather="minus"></i>
                                              <input type="number" value="1" min="1" max="10" />
                                              <i class="add" data-feather="plus"></i>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="option size">
                                      <div class="title-box4">
                                          <h4 class="heading">Size: <span class="bg-theme-blue"></span></h4>
                                          <span class="size-chart" data-bs-toggle="modal" data-bs-target="#sizeChart">Size Chart</span>
                                      </div>

                                      <div className='radio-size-block'>
                                            <Radio.Group defaultValue={size} onChange={onChangeSize} buttonStyle="solid">
                                                {
                                                    sizes.map((s, idx) =>
                                                        <Radio.Button key={idx} className={s.size} value={s._id}>{s.size}
                                                        
                                                        </Radio.Button>
                                                    )
                                                }
                                            </Radio.Group>
                                        </div>
                                  </div>
                                  <div class="option stocks">
                                    <div class="title-box4">
                                          <h4 class="heading">Stocks: {stock}  <span class="bg-theme-blue"></span></h4>
                                          
                                      </div>
                                    </div>        
                                  <div class="option sale-details">
                                      <div class="title-box4">
                                          <h4 class="heading">Sale End In <span class="bg-theme-blue"></span></h4>
                                      </div>

                                      <ul class="timer">
                                          <li><span class="days time-value"></span> <span class="timer-label">Days</span></li>
                                          <li><span class="hours time-value"></span> <span class="timer-label">Hours</span></li>
                                          <li><span class="minutes time-value"></span> <span class="timer-label">Minute</span></li>
                                          <li><span class="seconds time-value"></span> <span class="timer-label">Seconds</span></li>
                                      </ul>
                                  </div>

                                  <div class="option shipping-info">
                                      <div class="title-box4">
                                          <h4 class="heading">Shipping info <span class="bg-theme-blue"></span></h4>
                                      </div>

                                      <ul>
                                          <li>100% Original Products</li>
                                          <li>Free Delivery on order above Rs. 799</li>
                                          <li>Pay on delivery is available</li>
                                          <li>Easy 30 days returns and exchanges</li>
                                      </ul>
                                  </div>

                                  <div class="option shipping-info delevery-service">
                                      <div class="title-box4">
                                          <h4 class="heading">Delivery Option <span class="bg-theme-blue"></span></h4>
                                      </div>

                                      <ul class="delevery-list">
                                          <li>
                                              <i data-feather="truck"></i>
                                              <span>Free Shipping</span>
                                          </li>
                                          <li>
                                              <i data-feather="re-replace"></i>
                                              <span>10 Day Replace</span>
                                          </li>
                                          <li>
                                              <i data-feather="shield"></i>
                                              <span>1 Year Warranty</span>
                                          </li>
                                      </ul>
                                  </div>

                                  <div class="btn-group">
                                      <a href="javascript:void(0)" class="btn-solid btn-sm addtocart-btn">Add To Cart </a>
                                      <a href="javascript:void(0)" class="btn-outline btn-sm wishlist-btn">Add To Wishlist</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="des-box">
                      <div class="row gy-4">
                          <div class="col-12">
                            <ProductDescriptionComponent item={item}/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default ProductDetailsComponent