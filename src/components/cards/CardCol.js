import React from 'react'

export default function CardCol(props) {
    return (
        <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
            <div class="media-29191 text-center h-100">
            <div class="media-29191-icon">
                <img src="images/svg/parking.svg" alt="Image" class="img-fluid" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p><p><a href="#" class="readmore reverse">{props.readMore}</a></p></p>
            </div>
        </div>
    )
}
