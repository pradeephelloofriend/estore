import React from 'react'
import { Button, Modal } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ViewProductModalComponent = ({show, onHide,item}) => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(0);
  return (
    <>
    <Modal 
    title="" 
    open={show} 
    onOk={onHide} 
    onCancel={onHide}
    centered
    className='view-product'
    width={765}
    footer={null}
    >
        <div class="row gy-4 g-md-0">
              <div class="col-md-7">
                <div class="slider-box">
                  <div class="row g-2">
                    <div class="col-2">
                      <div class="thumbnail-box">
                        <div class="swiper thumbnail-img-box thumbnailSlider">
                            <Swiper 
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            
                            direction={"vertical"}
                             className="swiper-wrapper">
                                {item?.images.map((i,idx)=>
                                    <SwiperSlide key={idx} class="swiper-slide" >
                                    <img src={i.url} alt="img" />
                                    </SwiperSlide>
                                )}
                                
                            </Swiper>
                          
                        </div>
                      </div>
                    </div>
                    <div class="col-10 ratio_square">
                      <div class="swiper mainslider">
                      <Swiper 
                      spaceBetween={10}
                      navigation={false}
                      thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="swiper-wrapper">
                                {item?.images.map((i,idx)=>
                                    <SwiperSlide key={idx} class="swiper-slide" >
                                    <img class="bg-img" src={i.url} alt="img" />
                                    </SwiperSlide>
                                )}
                                
                            </Swiper>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="product-detail-box">
                  <div class="product-option">
                    <h4>{item?.name}</h4>
                    <div class="option price">
                      <h5>Price</h5>
                      <span>₹{item?.price-item?.discount}</span> <del>₹{item?.price}</del>
                    </div>
                    <div class="option">
                      <h5>Product Description</h5>
                      <p class="content-color">{item?.description}</p>
                    </div>
                    <div class="option">
                      <h5>Your Brand Color:</h5>
                      <ul class="color-list">
                        <li class="bg-theme-p-1 active"></li>
                        <li class="bg-theme-p-2"></li>
                        <li class="bg-theme-p-3"></li>
                      </ul>
                    </div>
                    <div class="option">
                      <h5>Size:</h5>
                      <ul class="size-list">
                        <li class="active">S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                      </ul>
                    </div>
                    <div class="option">
                      <h5>Quantity:</h5>
                      <div class="plus-minus">
                        <i class="sub" data-feather="minus"></i>
                        <input type="number" value="1" min="1" max="10" />
                        <i class="add" data-feather="plus"></i>
                      </div>
                    </div>

                    <div class="btn-group">
                      <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#viewModal" class="btn-solid btn-sm addtocart-btn">Add To Cart </a>
                      <a href="product.html" class="btn-outline btn-sm">View Full</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Modal>
    </>
  )
}

export default ViewProductModalComponent