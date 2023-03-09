import React from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'

export default function Login() {
  return (
   <>
      <Navbar/>
        <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card-login">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item-login text-center">
              <a className="nav-link active btl-login" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
            </li>
            <li className="nav-item-login text-center">
              <a className="nav-link btr-login" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="form-login px-4 pt-5">
                <input type="text" name className="form-control" placeholder="Email or Phone" />
                <input type="text" name className="form-control" placeholder="Password" />
                <button className="btn btn-dark-login btn-block">Login</button>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="form-login px-4">
                <input type="text" name className="form-control" placeholder="Name" />
                <input type="text" name className="form-control" placeholder="Email" />
                <input type="text" name className="form-control" placeholder="Phone" />
                <input type="text" name className="form-control" placeholder="Password" />
                <button className="btn btn-dark-login btn-block">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
   </>
  )
}
