import React from 'react'
import RatingComponent from './RatingComponent'
import ReviewRatingComponent from './ReviewRatingComponent'
import { Image, Progress } from 'antd'
import AddReviewFormComponent from '../reviews/AddReviewFormComponent'

const PraoductReviewComponent = ({ item }) => {
    //console.log('item',item)
    const [rvData,setRvData]=React.useState(item.reviews)
    //console.log('rvData',rvData)
    React.useEffect(()=>{
        setRvData(item.reviews)
    },[item])
    return (
        <><div class="review-section">
            <div class="row gy-4 gy-md-5 g-4 g-xxl-5">
                <div class="col-md-8 col-xxl-7 order-2 order-md-1">
                    <div class="review-left">
                        <div class="title-box4">
                            <h4 class="heading">Customers Q & A <span class="bg-theme-blue"></span></h4>
                        </div>
                        <div class="question-wrap">
            {rvData!==null|| rvData!==undefined?rvData.map((r,rx)=>
            <>
            <div key={rx} class="comment-box">
            <div class="img-box">
                <img src={r.reviewBy.image} alt="avatar" />
            </div>
            <div class="avatar-content">
                <div class="name-box">
                    <div class="user-info">
                        <h5><i data-feather="user"></i> {r.reviewBy.name}</h5>
                        <span> <i data-feather="clock"></i> Aug 29, 2022</span>
                    </div>
                    <div class="action-box ms-auto">
                        <ReviewRatingComponent count={Number(r.rating)} />
                    </div>
                </div>
                <div className='image-box'>
                    {r.images.map((img,idx)=>
                    <div key={idx} className='img-item'>
                            <img
                                style={{width:'110px'}}
                                src={img.url}
                            />
                        </div>
                    )}
                    
                
                </div>

                <p>
                    {r.review}
                </p>
            </div>
        </div>
        </>
            ):<></>}
                            
                        </div>

                    </div>
                    <AddReviewFormComponent item={item} setRvData={setRvData} />
                </div>
                <div class="col-md-4 col-xxl-5 order-1 order-md-2">
                    <div class="review-right sticky">
                        <div class="customer-rating">
                            <div class="title-box4">
                                <h4 class="heading">Customers Review<span class="bg-theme-blue"></span></h4>
                            </div>
                            <div class="global-rating">
                                <div>
                                    <h5>4.5</h5>
                                </div>
                                <div>
                                    <h6>Average Ratings</h6>
                                    <ReviewRatingComponent count={4} />

                                </div>
                            </div>
                            <ul class="rating-progess">
                                <li>
                                    <h5>5 Star</h5>
                                    <Progress percent={78} />
                                </li>
                                <li>
                                    <h5>4 Star</h5>
                                    <Progress percent={62} />
                                </li>
                                <li>
                                    <h5>3 Star</h5>
                                    <Progress percent={44} />
                                </li>
                                <li>
                                    <h5>2 Star</h5>
                                    <Progress percent={30} />
                                </li>
                                <li>
                                    <h5>1 Star</h5>
                                    <Progress percent={18} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PraoductReviewComponent