import React from 'react'
import ReactStars from "react-rating-stars-component";
const ReviewRatingComponent = ({count}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <div class="option rating-option">
            <ReactStars
                count={5}
                value={count}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
           
        </div>
  )
}

export default ReviewRatingComponent