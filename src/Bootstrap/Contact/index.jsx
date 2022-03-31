import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


export default class Contact extends React.Component{
    render(){
        return(
            <div id="contact">
            <h3 className="fs-bold fs-2 text-center mb-3">Contact</h3>
            <div className="card mx-auto">
                <div className="card-body">
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-secondary border border-dark btn-sm shadow-sm text-white px-3 py-2">
                          Send
                      </button>
                  </div>
                </div>
            </div>
        </div>
        )
    }
}