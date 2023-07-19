import React from 'react'
import { Tabs } from 'antd'
import PraoductReviewComponent from './PraoductReviewComponent'
const {TabPane}=Tabs
const ProductDescriptionComponent = ({item}) => {
    const [tabKey,setTabKey]=React.useState('0')
  return (
    <div>
        <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)} tabPosition={'top'}>
        
            <TabPane  tab={'Description'} key={'0'}>
              <div class="details-product">
                        <p>
                          The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text written on it in a black
                          glass is a heady concoction of madness mixed with a hint of wicked along with several bursts of outrageousness and a tingling spiciness of twisted humour bottled up in
                          intriguing grandeur cursive language which looks great on a white color.
                        </p>

                        <div class="title-box4 mb-3 mt-4">
                          <h4 class="heading mt-0">Comfort: <span class="bg-theme-blue"></span></h4>
                        </div>

                        <p>
                          Glass is a heady concoction of madness mixed with a hint of wicked along with several bursts of wicked along with several bursts outrageousness and a tingling spiciness of
                          twisted humour bottled up in intriguing grandeur
                        </p>
                </div>
            </TabPane>
            <TabPane  tab={'Specification'} key={'1'}>
            <div class="specification-wrap">
                      <p class="font-md content-color">
                        The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text written on it in a black
                        cursive language which looks great on a white color.
                      </p>
                      <div class="table-responsive">
                        <table class="specification-table table striped">
                          <tr>
                            <th>Product Dimensions</th>
                            <td>15 x 15 x 3 cm; 250 Grams</td>
                          </tr>
                          <tr>
                            <th>Date First Available</th>
                            <td>5 April 2021</td>
                          </tr>
                          <tr>
                            <th>Manufacturer‏</th>
                            <td>Aditya Birla Fashion and Retail Limited</td>
                          </tr>
                          <tr>
                            <th>ASIN</th>
                            <td>B06Y28LCDN</td>
                          </tr>
                          <tr>
                            <th>Item model number</th>
                            <td>AMKP317G04244</td>
                          </tr>
                          <tr>
                            <th>Department</th>
                            <td>Men</td>
                          </tr>
                          <tr>
                            <th>Item Weight</th>
                            <td>250 G</td>
                          </tr>
                          <tr>
                            <th>Item Dimensions LxWxH</th>
                            <td>15 x 15 x 3 Centimeters</td>
                          </tr>
                          <tr>
                            <th>Net Quantity</th>
                            <td>1 U</td>
                          </tr>
                          <tr>
                            <th>Included Components‏</th>
                            <td>1-T-shirt</td>
                          </tr>
                          <tr>
                            <th>Generic Name</th>
                            <td>T-shirt</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  
            </TabPane>
        <TabPane tab={'Seller'} key={'2'}>
          <div class="seller-info">
            
            <div class="addres-box">
              <p>
                <span class="contact"><i data-feather="map-pin"></i>Address :</span> <span class="contact-info"> 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United States </span>
              </p>
              <p>
                <span class="contact"><i data-feather="phone"></i>Contact Number :</span> <span class="contact-info"> 2545-3566-4525-4525 </span>
              </p>

              <p class="info">
                Supreme Seller is the world famous seller for quality and service classified by and how they are connected residences and land. Connected residences owned by a single entity
                leased out, or owned separately with an agreement covering the either a single family or multifamily structure that is available for occupation or for non-business purposes.
                relationship between units and common areas. Different types of housing tenure can be used for the same physical type.
              </p>
            </div>
          </div>
        </TabPane>
            <TabPane  tab={'Review'} key={'3'}>
              <PraoductReviewComponent item={item}/>
            </TabPane>
        </Tabs>
    </div>
  )
}

export default ProductDescriptionComponent