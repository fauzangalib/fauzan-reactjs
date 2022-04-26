import { Link } from 'react-router-dom';
import './index.css'
const Navigation = () => {
    return (
        <div className="sidebar">
            <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
            <Link to="/experience"><i className="fa fa-fw fa-wrench"></i> Experience</Link>
            <Link to="/education"><i className="fa fa-fw fa-user"></i> Education</Link>
            <Link to="/skill"><i className="fa fa-fw fa-envelope"></i> Skill</Link>
            <Link to="/interest"><i className="fa fa-fw fa-envelope"></i> Interest</Link>
            <Link to="/fortofolio"><i className="fa fa-fw fa-envelope"></i> Fortofolio</Link>
            <Link to="/android"><i className="fa fa-fw fa-envelope"></i> Android</Link>
            <Link to="/contents"><i className="fa fa-fw fa-envelope"></i> Contents</Link>

        </div>
    )
}

export default Navigation;