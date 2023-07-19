import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema();

const subCategorySchema=new mongoose.Schema(
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
        parent:{
            type:ObjectId,
            ref:"Category",
            required:true,
        }
    },
    
);
const SubCategory= mongoose.models.SubCategory || mongoose.model("SubCategory",subCategorySchema);
export default SubCategory;