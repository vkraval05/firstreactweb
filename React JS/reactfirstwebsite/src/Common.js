import React from 'react';
import { Link } from 'react-router-dom';


const Common = (props) => {
  return (
    <div>
      <section id='header' className='d-flex align-items-center mt-2 mt-lg-5'>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column text-center text-lg-start">
                  <h1 className='fw-bold'>{props.name}<strong className='brand-name'> abc.com</strong></h1>
                  <h2 className="my-3">
                    We are the team of talanted developer making websites
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className='btn-get-started'>{props.button}</Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-1 header-img d-flex justify-content-center">
                  <img src={props.imgsrc} alt="web" className="img-fluid navbar-brand animated" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Common
