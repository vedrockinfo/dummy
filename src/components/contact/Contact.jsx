import React from 'react';
import {GoMail} from 'react-icons/go';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <form action="">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='name' className="form-control" placeholder='Full Name' />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='mobile' className="form-control" placeholder='Phone No.' />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='email' className="form-control" placeholder='Email' />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" className="form-control" placeholder='Full Name' />
                </div>
                <div className="col-lg-12 col-md-12">
                  <textarea name="enquiry" id="" placeholder='Your Message'></textarea>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className='submit-btn'><button type="submit">send message</button></div>
                </div>
              </div>
            </form>
  )
}

export default Contact
