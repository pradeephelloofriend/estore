import React from 'react'
import HeaderMenuRightComponent from './HeaderMenuRightComponent'
//import styles from './styles.module.css'
import TopHeaderComponent from './TopHeaderComponent'
const HeaderComponent = ({session}) => {
  return (
    <>
          <header className={"header-common"}>
              <TopHeaderComponent />
              <div className={"container-lg"}>
                  <div className={"nav-wrap"}>
                      <nav className={"navigation"}>
                          <div className="nav-section">
                              <div className={"header-section"}>
                                  <div className="navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                                      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu" aria-controls="primaryMenu">
                                          <span className="navbar-toggler-icon"></span>
                                      </button>
                                      <a href="#" className="logo-link">
                                          <img className="logo logo-dark" src="/images/logos/logo.png" alt="logo" />
                                          <img className="logo logo-light" src="/images/logos/logo-w.png" alt="logo" />
                                      </a>
                                      <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                                          <div class="offcanvas-header navbar-shadow">
                                              <h5 class="mt-1 mb-0">Menu</h5>
                                              <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                          </div>
                                          <div class="offcanvas-body">
                                              <ul class="navbar-nav">
                                                  <li class="nav-item dropdown">
                                                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                                      <div class="dropdown-menu">
                                                          <div class="dropdown-column">
                                                              <a class="dropdown-item" href="shop-categories.html">Shop Categories</a>
                                                              <a class="dropdown-item" href="shop-filter.html">Shop Filter</a>
                                                              <a class="dropdown-item" href="shop-left-sidebar.html">Shop Left Sidebar</a>
                                                              <a class="dropdown-item" href="shop-list.html">Shop List</a>
                                                              <a class="dropdown-item" href="shop-masanory.html">Shop Masonry</a>
                                                              <a class="dropdown-item" href="shop-no-sidebar.html">Shop No Sidebar</a>
                                                              <a class="dropdown-item" href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                              <a class="dropdown-item" href="shop-top-filter.html">Shop Top Filter</a>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  <li class="nav-item dropdown dropdown-mega">
                                                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Oslo Plus</a>
                                                      <div class="dropdown-menu mega-element-menu">
                                                          <div class="row g-4">
                                                              <div class="col-xl-3">
                                                                  <div class="link-box">
                                                                      <h5>Portfolio Pages</h5>
                                                                      <div class="dropdown-column">
                                                                          <a class="dropdown-item" href="portfolio-2-grid.html">Portfolio 2 Grid</a>
                                                                          <a class="dropdown-item" href="portfolio-2-grid-masonry.html">Portfolio 2 Grid Masonry</a>
                                                                          <a class="dropdown-item" href="portfolio-3-grid.html">Portfolio 3 Grid <span class="badge bg-theme-theme">Hot</span></a>
                                                                          <a class="dropdown-item" href="portfolio-3-grid-masonry.html">Portfolio 3 Grid Masonry</a>
                                                                          <a class="dropdown-item" href="portfolio-4-grid.html">Portfolio 4 Grid</a>
                                                                          <a class="dropdown-item" href="portfolio-4-grid-masonry.html">Portfolio 4 Grid Masonry</a>
                                                                          <a class="dropdown-item" href="portfolio-no-space-masonry.html">Portfolio No Space Masonry</a>
                                                                      </div>
                                                                  </div>
                                                              </div>

                                                              <div class="col-xl-3">
                                                                  <div class="link-box">
                                                                      <h5>Elements Pages</h5>
                                                                      <div class="dropdown-column">
                                                                          <a class="dropdown-item" href="banner-element.html">Banner Element</a>
                                                                          <a class="dropdown-item" href="brand-element.html">Brand Element</a>
                                                                          <a class="dropdown-item" href="button-element.html">Button Element </a>
                                                                          <a class="dropdown-item" href="categories-element.html">Categories Element</a>
                                                                          <a class="dropdown-item" href="collection-banner-element.html">Collection Banner Element</a>
                                                                          <a class="dropdown-item" href="home-element.html">Home Banner Element</a>
                                                                          <a class="dropdown-item" href="instagram-element.html">Instagram Element <span class="badge bg-theme-sun2">New</span></a>
                                                                      </div>
                                                                  </div>
                                                              </div>

                                                              <div class="col-xl-3">
                                                                  <div class="link-box">
                                                                      <h5>Elements Pages</h5>
                                                                      <div class="dropdown-column">
                                                                          <a class="dropdown-item" href="offer-banner-element.html">Offer Banner Element</a>
                                                                          <a class="dropdown-item" href="brand-element.html">Brand Element <span class="badge bg-theme-theme">Hot</span></a>
                                                                          <a class="dropdown-item" href="product-card-element.html">Product Card Element</a>
                                                                          <a class="dropdown-item" href="seller-element.html">Seller Section Element</a>
                                                                          <a class="dropdown-item" href="service-element.html">Service Section Element</a>
                                                                          <a class="dropdown-item" href="tabs-element.html">Tabs Element</a>
                                                                          <a class="dropdown-item" href="title-element.html">Title Element</a>
                                                                      </div>
                                                                  </div>
                                                              </div>

                                                              <div class="col-xl-3 d-none d-xl-block">
                                                                  <div class="link-box">
                                                                      <div class="menu-img">
                                                                          <img class="img-fluid" src="/images/demo-img/menu-bg.jpg" alt="img" />
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </nav>
                      {/*<!-- Menu Right Start  -->*/}
                      <HeaderMenuRightComponent session={session}/> 
                  </div>
              </div>
          </header>
      </>
  )
}

export default HeaderComponent