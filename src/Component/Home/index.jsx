import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div>
                <h1>
                    SkipperTech
                </h1>
                <div>
                    street Mekarsari RT 02 RW 06 Gunungmanik village Tanjungsari District
                    <br />
                    <a href="mailto:name@email.com">ozangaib@gmail.com</a>
                </div>
                <h3>Fauzan Galib</h3>
                <p>I am an IT enthusiast, I love learning about technology. I hope to be able to build a startup in Indonesia. maybe making your own website is one of the first steps to make it happen.</p>
            </div>
            <ul>
                <li><Link to="/contents/1"></Link>Satu</li>
                <li><Link to="/contents/2"></Link>Dua</li>
                <li><Link to="/contents/3"></Link>Tiga</li>
            </ul>
        </div>
    )
}
export default Home;