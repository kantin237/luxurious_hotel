import React from 'react'

export default function Form(props) {
    
    return (
                
        <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                  
            <form action="#">
            <div class="form-group">
                <label for="name">{props.name}</label>
                <input type="text" class="form-control" id="name" />
            </div>
            <div class="form-group">
                <label for="email2">{props.email}</label>
                <input type="text" class="form-control" id="email2" />
            </div>
            <div class="form-group">
                <label for="subject">{props.subject}</label>
                <input type="text" class="form-control" id="subject" />
            </div>
            <div class="form-group">
                <label for="message">{props.message}</label>
                <textarea name="message" class="form-control" id="message" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Send" class="btn btn-black px-5 text-white" />
            </div>
            </form>
        </div>

    )
}
