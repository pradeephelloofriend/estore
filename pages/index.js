import AddSectionComponent from '@/components/add/AddSectionComponent'
import MainBannerComponent from '@/components/banner/MainBannerComponent'
import ItemCategoryComponent from '@/components/item/ItemCategoryComponent'
import ItemNewArrivalComponent from '@/components/item/ItemNewArrivalComponent'
import OfferSectionComponent from '@/components/offer/OfferSectionComponent'
import ServiceSectionComponent from '@/components/service/ServiceSectionComponent'
import axios from 'axios'
import React from 'react'
import db from '@/utils/db'
import Product from '@/models/Product'
export async function getServerSideProps(){
  db.connectDb();
  let products=await Product.find().sort({createdAt:-1}).lean();
  let data = await axios.get('https://api.ipregistry.co/?key=oen3yacqimmskwyi')
  .then((res)=>{
    return res.data.location.country;
  })
  .catch((er)=>{
    console.log(er)
  })
  return{
    props:{
      country:data,
      products:JSON.parse(JSON.stringify(products))
    }
  }
  
}
const index = ({country,products}) => {
  console.log('products',products)
  return (
    <>
    <MainBannerComponent/>
    <ItemCategoryComponent/>
    <OfferSectionComponent/>
    <AddSectionComponent/>
    <ItemNewArrivalComponent products={products}/>
    <ServiceSectionComponent/>
    </>
  )
}

export default index
