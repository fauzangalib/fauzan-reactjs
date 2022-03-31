import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
export default class Jumbotron extends React.Component {
    render() {
        return(
            <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
            <div className="container-fluid py-5 text-center">
                <p className="fs-5 fst-italic mt-5 text-white ">Proggramer/Development</p>
                <h1 className="display-4 text-white">Fauzan Galib</h1>
                <img className="img mx-auto" alt="" src="https://github.com/fauzangalib/git/blob/conflict/1641458429037.png?raw=true"/>
                <a className="btn btn-secondary border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2" href="https://www.instagram.com/fauzan_galib/" role="button">
                    Instagram Profil
                </a>
            </div>
          </div>
        )
    }
}
