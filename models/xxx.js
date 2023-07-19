import mongoose from "mongoose";
const ObjectId =mongoose.Schema.Types.ObjectId

const reviewSchema =new mongoose.Schema(
    {
        reviewBy:{
            type:ObjectId,
            ref:"User",
            required:true,
        },
        
        rating:{
            type:Number,
            required:true,
            default:0,
        },
        review:{
            type:String,
            required:true,
        },
        
        images:[],
        

    },
    {
        timestamps:true,
    }
);
//const Review= mongoose.models.Review || mongoose.model("Review",reviewSchema);
//export default Review;