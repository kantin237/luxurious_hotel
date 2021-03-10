import React from 'react'
import Contact from '../contact/Contact'
import Form from '../form/Form'


export default function ContactCardWithForm() {
    let title = "Fill the form";
    const form ={
        name:"Your Name *",
        email: "Your Email *",
        subject: "Subject",
        message: "Message *"
    }
    const contact ={
        email: "Email",
        emailValue: "info@Untree.co",
        phone: "Phone",
        phoneValue: "+30 931 3829 399",
        address: "Address",
        addressValue: "273 South Riverview Rd. New York, NY 10011"
    }
    return (
        <div className="row">
            <div class="col-12" data-aos="fade-up">
                <h2 class="display-4 mb-5">{title}</h2>
            </div>
            <Form 
            name= {form.name}
            email= {form.email}
            subject= {form.subject}
            message= {form.message}
            />
            <Contact 
            email= {contact.email}
            emailValue= {contact.emailValue}
            phone= {contact.phone}
            phoneValue= {contact.phoneValue}
            address= {contact.address}
            addressValue= {contact.addressValue}
            />
        </div>
    )
}
