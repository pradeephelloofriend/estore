import React from 'react'
import { Star,Heart,Eye,Repeat,ShoppingBag} from 'react-feather';
import AddToCartButtonComponent from '../action-buton/AddToCartButtonComponent';
import AddToWishlistButtonComponent from '../action-buton/AddToWishlistButtonComponent';
import CompareItemButtonComponent from '../action-buton/CompareItemButtonComponent';
import ViewItemButtonComponent from '../action-buton/ViewItemButtonComponent';
import { useRouter } from 'next/router';
import Link from 'next/link';
const ItemComponent = ({item}) => {
    console.log('item',item)
    const router=useRouter()
    const [active,setActive]=React.useState(0);
    
    
    const [imgPath,setImgPath]=React.useState(item?.images[0].url)
    const[id,setId]=React.useState(0)
    console.log('hggg',item?.images[0].url)
    const setThumb=(pid,path)=>{
        setId(pid)
        setImgPath(path)
    }
    React.useEffect(()=>{
        setImgPath(item?.images[0].url)
    },[item])
    console.log('imhpath',imgPath)
  return (
      <div class="product-card">
          <div class="img-box">

              <ul class="thumbnail-img">
                {item?.images.map((i,idx)=>
                <li key={idx} onClick={()=>setThumb(idx,`${i.url}`)} class={id==idx?'active thumb':'thumb'}><img src={`${i.url}`} alt="thumbnail" /></li>
                )}
                  
                  
              </ul>
              
                <a  href='#' onClick={()=>router.push(`/products/${item?.slug}`)} class="primary-img bg-img"><img class="img-fluid bg-img" src={imgPath} alt="product" /> </a>
              

              


              <div class="rating">
                  <span>4.5 <Star/> </span>
                  <span>185</span>
              </div>


              <ul class="option-wrap">
                  <li>
                      <AddToWishlistButtonComponent/>
                  </li>
                  <li>
                      <CompareItemButtonComponent/>
                  </li>
                  <li>
                      <ViewItemButtonComponent item={item}/>
                  </li>
                  <li>
                      <AddToCartButtonComponent/>
                  </li>
              </ul>
          </div>


          <div class="content-box">
              <a href="product.html">
                  <p>{item?.brand}</p>
                  <h5>{item?.name}</h5>
                  <span>₹{item?.price-item?.discount}</span> <del>₹{item?.price}</del>
              </a>
          </div>
      </div>
  )
}

export default ItemComponent