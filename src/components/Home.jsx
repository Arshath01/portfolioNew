
import '../styles/style.css';

export default function Home() {
    return (
        <>
            <div id="oval_wrap">
                <div id="oval"></div>
            </div>
            <div id="oval_inner"></div>
            <div id="content" className="">
                <h1>MOHAMMED ROSHEN</h1>
                <p className="subtitle">Qualified in PCN LEVEL - II UT -3.1 & 3.2,MT,PT</p>
                <p className="description">
                    Building the Future of Innovation and Precision with a Passion for Engineering.
                </p>
                <div className="cta">
                    <p>Explore my portfolio</p>
                    <a rel="stylesheet" href="#experience">
                        <input type="submit" value="WORKS" className="btn btn-dark" />
                    </a>
                </div>
            </div>
        </>
    );
}
