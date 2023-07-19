import React from 'react'
import ReactStars from "react-rating-stars-component";
const RatingComponent = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div class="option rating-option">
            <ReactStars
                count={5}
                value={4}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            <span>120 Rating</span>
        </div>
    )
}

export default RatingComponent