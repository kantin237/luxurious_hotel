import React from 'react'
import Menu from '../header/Menu'

export default function Hero() {
    return (
        <div className="untree_co--site-wrap">
            <Menu />
            <div class="untree_co--site-main">      
                <div class="untree_co--site-hero inner-page" style={{backgroundImage:"url('images/slider_2.jpg')"}}>
                    <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-7 text-center">
                        <div class="site-hero-contents" data-aos="fade-up">
                            <h1 class="hero-heading text-white">Rooms</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>         
            </div>
        </div>
    )
}
