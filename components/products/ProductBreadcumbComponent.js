import React from 'react'

const ProductBreadcumbComponent = ({title,pageName}) => {
  return (
    <>
    <div class="breadcrumb-wrap">
        <div class="banner">
          
          <div class="container-lg">
            <div class="breadcrumb-box">
              <div class="heading-box">
                <h1>Product</h1>
              </div>
              <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li>
                  <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                </li>
                <li class="current"><a href="product.html">Product</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductBreadcumbComponent