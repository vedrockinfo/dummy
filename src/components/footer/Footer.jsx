import React from 'react';

const Footer = () => {
  return (
    <div className='footer mt-large'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">contacts</h6>
          <div className="space-one"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h2 className="primary-heading text-center">lorem is u</h2>
            <div className="space-one"></div>
            <div className="footer-contact-grid">
              <div className="card-box">
                <div className="icon"></div>
                <div class="name">Address</div>
                <div className="content-para">
                  <p>Lucknow</p>
                </div>
              </div>
              <div className="card-box">
                <div className="icon"></div>
                <div class="name">Address</div>
                <div className="content-para">
                  <p>Lucknow</p>
                </div>
              </div>
              <div className="card-box">
                <div className="icon"></div>
                <div class="name">Address</div>
                <div className="content-para">
                  <p>Lucknow</p>
                </div>
              </div>
              <div className="card-box">
                <div className="icon"></div>
                <div class="name">Address</div>
                <div className="content-para">
                  <p>Lucknow</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h2 className="primary-heading text-center">lorem is u</h2>
            <div className="space-one"></div>
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
          </div>
        </div>
      </div>
      <div className="footer-copyright mt-large">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">Copyright &copy; 2023 All Right Reserved. Quick Design By Vedant </p>
            </div>
            <div className="col-md-6">
              <div className="footerlinks">
                <ul>
                  <li><a href="#">terms & condition</a></li>
                  <li>|</li>
                  <li><a href="3">privacy policy</a></li>
                </ul>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
