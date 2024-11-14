import React from 'react'
import Heading from './Heading'
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
import '../app/styles/Contact.css';  // Import the custom CSS file

const Contact = () => {
  return (
    <div id='contact' className='contact-section'>
      <div className='contact-grid'>
        <div className='contact-header'>
          <Heading title='Contact' />
          <h3 className='contact-title' data-aos="zoom-in-up">Get In Touch</h3>
          <p className='contact-description' data-aos="zoom-in-up">
            If you want your Portfolio like this then contact me. I also design the CV (Resume) with the best designs.
          </p>
          <br />
          <div className='contact-info' data-aos="zoom-in-up">
            <div className='contact-item'>
              <div className='contact-email'>
                <MdOutlineAttachEmail size={40} /> xyz@gmail.com
              </div>
            </div>
            <div className='contact-item' data-aos="zoom-in-up">
              <div className='contact-phone'>
                <BsTelephoneOutbound size={40} /> (021) 000-6500
              </div>
            </div>
          </div>
        </div>

        <div className='contact-form'>
          <h1 className='form-title' data-aos="zoom-in-up">Enter Information here!</h1>
          <div className='form-field' data-aos="zoom-in-up">
            <label htmlFor="name">Name: </label>
            <input type="text" className='form-input' id='name' />
          </div>
          <div className='form-field' data-aos="zoom-in-up">
            <label htmlFor="email">Email: </label>
            <input type="text" className='form-input' id='email' />
          </div>
          <div className='form-field' data-aos="zoom-in-up">
            <label htmlFor="msg">Message: </label>
            <textarea className='form-textarea' id='msg'></textarea>
          </div>
          <button className='form-button' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
