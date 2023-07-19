import ProductBreadcumbComponent from '@/components/products/ProductBreadcumbComponent';
import ProductDetailsComponent from '@/components/products/ProductDetailsComponent';
import Category from '@/models/Category';
import Product from '@/models/Product';
import User from '@/models/User';
import Review from '@/models/xxx';
import db from '@/utils/db'
import React from 'react'
export async function getServerSideProps(context){
console.log(context.query.slug)
const {query}=context
const slug=query.slug
db.connectDb();
//------------
let product=await Product.findOne({slug})
.populate({path:"category",model:Category})
.populate({path:"reviews.reviewBy",model:User})
.lean()
//------------
db.disconnectDb();
    return{
        props:{product:JSON.parse(JSON.stringify(product))}
    }
}
const index = ({product}) => {
    console.log('product slug',product)
  return (
    <>
    <ProductBreadcumbComponent/>
    <ProductDetailsComponent item={product}/>
    </>
  )
}

export default index