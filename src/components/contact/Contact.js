import React from 'react'

export default function Contact(props) {
    return (
        
        <div class="col-md-4 ml-auto"  data-aos="fade-up" data-aos-delay="200">
        <div class="media-29190">
          <span class="label">{props.email}</span>
          <p><a href="#">{props.emailValue}</a></p>
        </div>
        <div class="media-29190">
          <span class="label">{props.phone}</span>
          <p><a href="#">{props.phoneValue}</a></p>
        </div>
        <div class="media-29190">
          <span class="label">{props.address}</span>
          <p>{props.addressValue}</p>
        </div>
        <div class="media-29190">
          <span class="label">Social</span>
          <ul class="icons-top icons-dark">
            <li>
              <a href="#"><span class="icon-facebook"></span></a>
            </li>
            <li>
              <a href="#"><span class="icon-twitter"></span></a>
            </li>
            <li>
              <a href="#"><span class="icon-instagram"></span></a>
            </li>
            <li>
              <a href="#"><span class="icon-tripadvisor"></span></a>
            </li>
          </ul>
        </div>
      </div>            

    )
}
