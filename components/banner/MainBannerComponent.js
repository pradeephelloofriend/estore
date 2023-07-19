import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
SwiperCore.use([Pagination]);
const MainBannerComponent = () => {
  return (
    <section class="home-slider-common ratio_40 p-0">
        <div class="swiper home-slider">
        <Swiper spaceBetween={30}  pagination={{
              "clickable": true
            }} className="swiper-wrapper">
              
              <SwiperSlide class="swiper-slide" >
              <div class="banner">
                <div>
                  <img class="bg-img img-fluid" src="/images/fashion/banner/banner1.jpg" alt="banner" />
                </div>
                
                <img class="img-fluid banner-left-img" src="/images/fashion/slider/banner1-1.png" alt="" />

                <div class="content-box">
                  <h1 class="heading">
                    Find your <strong> Latest</strong> <span> Collection <img class="shape" src="https://themes.pixelstrap.com/oslo/assets/svg/shape.svg" alt="shape" /></span> of favorite <strong>Styles</strong> here
                  </h1>
                  <p>We try to provide the best for our customers and try to make sure we always provide the best service for you.</p>
                  <a href="shop-left-sidebar.html" class="btn-solid">SHOP <i class="arrow"></i></a>
                </div>

              
                <img class="img-fluid banner-right-img" src="/images/fashion/slider/banner1-2.png" alt="" />

                
                <div class="card-box">
                  <div class="card-wrap">
                    <div class="card card1">
                      <div class="img-wrap">
                        <a href="product.html"> <img class="img-fluid" src="/images/fashion/slider/banner1-c2.png" alt="card" /> </a>
                      </div>
                      <div class="content">
                        <a href="product.html">
                          <h5>Winter Jacket <span>Oozio Style</span></h5>
                          <h6>$120.00</h6></a
                        >
                      </div>
                    </div>

                    <div class="card card2">
                      <div class="img-wrap">
                        <a href="product.html"> <img class="img-fluid" src="/images/fashion/slider/banner1-c1.png" alt="card" /> </a>
                      </div>
                      <div class="content">
                        <a href="product.html">
                          <h5>Women’s shirt <span>Bluezone</span></h5>
                          <h6>$110.00</h6></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              </SwiperSlide>
              
            </Swiper>
        </div>
    </section>
  )
}

export default MainBannerComponent