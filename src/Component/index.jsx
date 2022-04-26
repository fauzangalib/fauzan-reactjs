import Navigation from "./Navigation"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";
import Interest from "./Interest";
import Fortofolio from "./Fortofolio";
import Android from "./Android";
import Contents from "./Contents";

const Routing = () => {
    return(
        <div>
            <Router>
            <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience/*" element={<Experience/>}/>
                    <Route path="/education/*" element={<Education/>}/>
                    <Route path="/skill" element={<Skill/>}/>
                    <Route path="/interest" element={<Interest/>}/>
                    <Route path="/fortofolio" element={<Fortofolio/>}/>
                    <Route path="/android" element={<Android/>}/>
                    <Route path="/contents/:id" element={<Contents/>}/>
                </Routes>
            </Router>
        </div>
    )

}
export default Routing;