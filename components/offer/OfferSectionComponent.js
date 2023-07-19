import React from 'react'

const OfferSectionComponent = () => {
  return (
    <section class="offer-section pb-0">
        <div class="container-lg">
          <div class="row g-4 g-lg-6">
            <div class="col-6 col-sm-3">
              <div class="offer">
                <h5 class="offer-heading">
                  GET 20% OFF
                  <span class="bg-theme-pink"></span>
                </h5>
                <p>ON ORDERS OVER $20*</p>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="offer">
                <h5 class="offer-heading">
                  GET 23% OFF
                  <span class="bg-theme-yellow"></span>
                </h5>
                <p>ON ORDERS OVER $50*</p>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="offer">
                <h5 class="offer-heading">
                  GET 47% OFF
                  <span class="bg-theme-orange"></span>
                </h5>
                <p>ON ORDERS OVER $99*</p>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="offer">
                <h5 class="offer-heading">
                  Code : CODE09
                  <span class="bg-theme-blue"></span>
                </h5>
                <p>Apply Code and get Discount</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OfferSectionComponent