import React from 'react'

export default function TextHeaderTwoCardsWithImage(props) {
    return (
        <div class="row no-gutters">
              <div class="col-md-4"  data-aos="fade-up">
                 <img src="images/room_1_b.jpg" alt="Image" class="img-fluid" data-jarallax-element="-140" />
              </div>
              <div class="col-md-8">
                <div class="row justify-content-center">
                  <div class="col-md-10">
                    <h3 class="mb-4" data-aos="fade-up">{props.title}</h3>
                    <div class="row">
                      <div class="col-md-6" data-aos="fade-up">
                        
                        <p>{props.titleDetails}</p>                  

                        <p>{props.details1} </p>
                    
                      </div>
                      <div class="col-md-6"  data-aos="fade-up">
                        <p>{props.details2}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
    )
}
