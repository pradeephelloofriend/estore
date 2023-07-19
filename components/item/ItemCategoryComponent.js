import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const ItemCategoryComponent = () => {
  return (
    <>
    <div class="catagories-section">
        <div class="swiper home-catagories-slider">
        <Swiper
        slidesPerView={6}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-wrapper mb-0"
      >
        <SwiperSlide class="swiper-slide">
        <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/jeans.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name"> Jeans </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
        <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/coat.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name"> Coats & Jackets</span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
              <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/dress.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name"> Dresses </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/skirt.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name"> Skirt </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/full.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name">Jumpsuits & Playsuits </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
              <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/jaket.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name">Hoodies & Sweatshirts </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
              <div class="catagories">
                <img class="leaf-shape" src="https://themes.pixelstrap.com/oslo/assets/svg/leaf.svg" alt="leaf" />
                <a href="shop-left-sidebar.html">
                  <div class="img-wrap">
                    <img src="https://themes.pixelstrap.com/oslo/assets/icons/svg/jaket.svg" alt="jeans" />
                  </div>
                  <div class="btn-box">
                    <span class="catagories-name">Hoodies & Sweatshirts </span>
                    <div class="btn-special">SHOP <i class="arrow"></i></div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
      </Swiper>
        </div>
    </div>
    </>
  )
}

export default ItemCategoryComponent