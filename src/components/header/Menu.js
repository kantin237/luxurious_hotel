import React from 'react'

export default function Menu(props) {
    return (
        <nav class="untree_co--site-nav js-sticky-nav">
        <div class="container d-flex align-items-center">
          <div class="logo-wrap">
            <a href="index.html" class="untree_co--site-logo">{props.logo}</a>
          </div>
          <div class="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul class="site-nav-ul js-clone-nav">
              <li class="active"><a href="index.html">{props.menuOne}</a></li>
              <li class="has-children">
                <a href="rooms.html">{props.menuTwo}</a>
                <ul class="dropdown">
                  <li class="has-children">
                    <a href="#">{props.menuTwoOne}</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">{props.menuTwoOneOne}</a>
                      </li>
                      <li>
                        <a href="#">{props.menuTwoOneTwo}</a>
                      </li>
                      <li>
                        <a href="#">{props.menuTwoOneThree}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">{props.menuTwoTwo}</a>
                  </li>
                  <li>
                    <a href="#">{props.menuTwoThree}</a>
                  </li>
                </ul>
              </li>
              <li><a href="amenities.html">{props.menuThree}</a></li>
              <li><a href="gallery.html">{props.menuFour}</a></li>
              <li><a href="about.html">{props.menuFive}</a></li>
              <li><a href="contact.html">{props.menuSix}</a></li>
            </ul>
          </div>
          <div class="icons-wrap text-md-right">

            <ul class="icons-top d-none d-lg-block">
              <li class="mr-4">
                <a href="#" class="js-search-toggle"><span class="icon-search2"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <a href="#" class="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </nav>
       
    )
}
