import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema();

const categorySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:[2,"must be atlease 2 charcter"],
            maxlength:[32,"must not exceed 32 charcetr"],
        },
        slug:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            index:true,
        },
    },
    {
        timestamps:true,
    }
);
const Category= mongoose.models.Category || mongoose.model("Category",categorySchema);
export default Category;