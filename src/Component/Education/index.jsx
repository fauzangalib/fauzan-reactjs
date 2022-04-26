import { Link, Routes, Route } from "react-router-dom"
const Education = () => {
    function Amik() {
        return (
            <div >
                <div >
                    <h3 >Amik Hass</h3>
                    <div >Diploma in Information Management</div>
                    <div>Computer Science - Web Development </div>
                </div>
                <div>2021 - Now</div>
            </div>
        )
    }
    function Tanjungsari() {
        return (
            <div >
                <div>
                    <h3 >Tanjungsari State High School</h3>
                    <div >Science Major</div>
                </div>
                <div>2017 - 2020</div>
            </div>
        )
    }
    return (
        <div className="main">
            <div>
                <h2>Education</h2>
                <hr />
                <ul>
                    <li><Link to="amik" >Amik Hass</Link></li>
                    <li><Link to="tanjungsari" >Tanjungsari</Link></li>
                </ul>
                <Routes>
                    <Route path="amik" element={<Amik />} />
                </Routes>
                <Routes>
                    <Route path="tanjungsari" element={<Tanjungsari />} />
                </Routes>

            </div>
        </div>
    )
}
export default Education;