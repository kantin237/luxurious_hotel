import React from 'react'
import Menu from '../header/Menu'

import {menu} from '../../Const'

export default function MainHero(props) {
    
    return (
        <div className="untree_co--site-wrap">
            <Menu 
            logo ={menu.logo}
            menuOne ={menu.menuOne}
            menuTwo ={menu.menuTwo}
            menuTwoOne ={menu.menuTwoOne}
            menuTwoOneOne = {menu.menuTwoOneOne}
            menuTwoOneTwo = {menu.menuTwoOneTwo}
            menuTwoOneThree = {menu.menuTwoOneThree}
            menuTwoTwo ={menu.menuTwoTwo}
            menuTwoThree ={menu.menuTwoThree}
            menuThree ={menu.menuThree}
            menuFour ={menu.menuFour}
            menuFive ={menu.menuFive}
            menuSix ={menu.menuSix}
            />
            <div class="untree_co--site-main">       

                <div class="owl-carousel owl-hero">
                    <div class="untree_co--site-hero overlay" style={{backgroundImage:"url('images/slider_2.jpg')"}}>
                        <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-8">
                            <div class="site-hero-contents text-center" data-aos="fade-up">
                                <h1 class="hero-heading">{props.titleSlider1}</h1>
                                <div class="sub-text">
                                <p> {props.subTitle} <a href="https://untree.co/" target="_blank" class="text-white font-weight-bold">Untree.co</a>. See our <a href="https://untree.co/license/" class="text-white font-weight-bold">license page</a> for more usage details</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="untree_co--site-hero overlay" style={{backgroundImage:"url('images/slider_1.jpg')"}} >
                        <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-7">
                            <div class="site-hero-contents text-center" data-aos="fade-up">
                                <h1 class="hero-heading">{props.titleSlider2}</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="untree_co--site-hero overlay" style={{backgroundImage:"url('images/room_1_a.jpg')"}} >
                        <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-10">
                            <div class="site-hero-contents text-center" data-aos="fade-up">
                                <h1 class="hero-heading">{props.titleSlider3}</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
