import nc from 'next-connect';
import db from '@/utils/db';
import Product from '@/models/Product';
import auth from '../../../../middleware/auth';
///import auth
const handler=nc();
handler.put(async(req,res)=>{
    try {
        await db.connectDb();
        const{images,rating,desc,user}=req.body;
        //console.log('user',user)
        //console.log('rating',rating)
        //console.log('review',desc)
        //console.log('images',Object.values(images).flat())
        const rImage=Object.values(images).flat()
        const product=await Product.findById(req.query.id);
        //console.log('product',product)
        if(product){
            const exist=product.reviews.find(
                (x)=>x.reviewBy.toString()==user.id
            )
            //console.log('exist',exist)
            if(exist || exist!==undefined){
                await Product.updateOne({
                    _id:req.query.id,
                    "reviews._id":exist._id
                },{
                    $set:{
                       "reviews.$.review" :desc,
                       "reviews.$.rating" :rating,
                       "reviews.$.images" :rImage,
                       
                    }
                },{
                    new:true
                }
                );
                const updatedProduct=await Product.findById(req.query.id)
                //console.log('updaadte product',updatedProduct)
                updatedProduct.numReviews=updatedProduct.reviews.length
                //console.log('updaadte product-numreview',updatedProduct.numReviews)
                updatedProduct.rating=
                    updatedProduct.reviews.reduce((a,r)=>r.rating+a,0) /
                    updatedProduct.reviews.length
                    //console.log('updaadte product-rating',updatedProduct.rating)
                await updatedProduct.save()
                await updatedProduct.populate("reviews.reviewBy")
                const data= updatedProduct.reviews
                //console.log('add-review tempReview',data)
                await db.disconnectDb()
                return res.json(data.reverse())
            }else{
                //console.log('not exit ',true)
                const review={
                    reviewBy:user.id,
                    rating:rating,
                    review:desc,
                    images:rImage
                }
                //console.log('add-review data=',review)
                product.reviews.push(review);
                //console.log('add-review data=1',product.reviews)
                product.numReviews=product.reviews.length
                //console.log('add-review numrervuiew=2',product.numReviews)
                product.rating=
                    product.reviews.reduce((a,r)=>r.rating+a,0) /
                    product.reviews.length;
                    //console.log('add-review rating=2',product.rating)
                await product.save()
                await product.populate("reviews.reviewBy")
                //const tempReview=product.reviews.reverse()
                const data= product.reviews
                await db.disconnectDb()
                //console.log('add-review tempReview',data)
                return res.json(data.reverse())

            }
        }
        //return res.statusCode(200).json({message:'hello'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})
export default handler;