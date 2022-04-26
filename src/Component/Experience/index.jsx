import React from "react";
import { Link, Routes, Route } from "react-router-dom";


const Experience = () => {
    function Eduwork() {
        return (
            <div>
                <div >
                    <h3 >Learning Fullstack Develompnet </h3>
                    <div >At Eduwork</div>
                    <p>Belajar rutin selama 4 bulan bersama mentor ternama yang kedepannya disalurkan kerja di perusahaan teknologi. kurikulum yang dipelajari yaitu Git Html CSS Javasript ReactJS NodeJS ExpressJS MySql MonggoDB Task Backend and Frontend.</p>
                </div>
                <div>January 2022 - April 2022</div>
            </div>
        )
    }
    function Progate() {
        return (
            <div>
                <div>
                    <h3 >Junior Web Designer </h3>
                    <div >At Progate</div>
                    <p>Belajar selama 1 bulan di platfrom Progate yang langsung menggunakan teks editor di website Progate itu sendiri. Kurikulum yang dibahas hanya HTML dan CSS.</p>
                </div>
                <div >Jan 2022 - Feb 2022</div>
            </div>
        )
    }
    return (
        <div className="main">
            <h2>Experience</h2>
            <hr />
            <ul>
                <li><Link to="eduwork" >Fullstack Development</Link></li>
                <li><Link to="progate" >Junior Web Designer</Link></li>
            </ul>
            <Routes>
                <Route path="eduwork" element={<Eduwork/>} />
            </Routes>
            <Routes>
                <Route path="progate" element={<Progate/>} />
            </Routes>
        </div>



    )

}


export default Experience;