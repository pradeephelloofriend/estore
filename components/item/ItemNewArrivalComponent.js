import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import ItemComponent from './ItemComponent'
const ItemNewArrivalComponent = ({products}) => {
    console.log('products',products)
    return (
        <section class="pb-0 ratio_asos">
            <div class="container-lg">
                <div class="title-box">
                    <h2 class="unique-heading">NEW ARRIVALS</h2>
                    <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                    <p>The best ways to change your summer wardrobe into autumn wardrobe.</p>
                </div>

                <div class="swiper product-slider">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                            clickable:true,
                        }}
                        modules={[Pagination]}
                        className="swiper-wrapper mb-0"
                    >
                        {products.map((item,idx)=>
                            <>
                                <SwiperSlide class="swiper-slide" key={item._id}>
                                    <ItemComponent item={item} />
                                </SwiperSlide>
                            </>
                        )}
                        
                        
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ItemNewArrivalComponent