import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


export default class Footer extends React.Component{
    render(){
        return(
        <div className="container-fluid bg-dark mb-0 mt-5">
            <footer>
                <p className="text-white text-center footer">&copy; 2021 Eduwork, Inc. All right reserved</p>
            </footer>
        </div>
        )
    }
}