import React from 'react'
import CardCol from './CardCol'

export default function CardThreeColGrid() {
  let title = "Hotel Amenities";
  const card = {
    title : "Free Self-Parking",
    description : "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
    readMore: "Read More"
  }
    return (
        <div class="untree_co--site-section">
          <div class="container">
            <div class="container pt-0 pb-5">
            <div class="row justify-content-center text-center">  
              <div class="col-lg-6 section-heading" data-aos="fade-up">
                <h3 class="text-center">{title}</h3>
              </div>
            </div>
          </div>
            <div class="row custom-row-02192 align-items-stretch">
              <CardCol
              title = {card.title}
              description = {card.description}
              readMore = {card.readMore} 
              />
            </div>
          </div>
        </div>
        
    )
}
