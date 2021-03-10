import React from 'react'

export default function DescriptionOneCardWithImage(props) {
    return (
        <div class="row no-gutters align-items-stretch room-animate site-section">
              <div class="col-md-7 img-wrap" data-jarallax-element="-100">
                
                <div class="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage:'url("images/room_1_a.jpg")'}}>
                
                </div>
              </div>
              <div class="col-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-8 py-5">
                    <h3 class="display-4 heading">{props.title}</h3>
                    <div class="room-exerpt">
                      <div class="room-price mb-4">{props.price}<span class="per">{props.by}</span></div>
                      <p>{props.longDescription} </p>
                      <p> {props.shortDescription}</p>

                      <div class="row mt-5">
                        <div class="col-12">
                          <h3 class="mb-4">{props.titleDetails}</h3>
                          <ul class="list-unstyled ul-check">
                            <li>{props.details1}</li>
                            <li>{props.details2}</li>
                            <li>{props.details3}</li>
                            <li>{props.details4}</li>
                            <li>{props.details5}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            
    )
}
