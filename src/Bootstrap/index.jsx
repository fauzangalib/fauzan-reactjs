import React from "react";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";



export default class Bootstrap extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <Jumbotron/>
                <Bio/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}