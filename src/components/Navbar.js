import React from "react";
import { useHistory } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const history = useHistory();

    const callEarlyLife = (event) => {
        history.push("/early-life");
    }

    const callSoilScience = (event) => {
        history.push("/soil-science");
    }

    const callIisc = (event) => {
        history.push("/iisc");
    }

    const callRothamsted = (event) => {
        history.push("/rothamsted");
    }

    const callFoodTech = (event) => {
        history.push("/food-tech");
    }

    const callCftri = (event) => {
        history.push("/cftri");
    }

    const callInfantFood = (event) => {
        history.push("/infant-food");
    }

    const callTapioca = (event) => {
        history.push("/tapioca-cassava");
    }

    const callSpices = (event) => {
        history.push("/spices");
    }

    const callPencillin = (event) => {
        history.push("/pencillin-glucanate-and-soluble-casein");
    }

    const callPhilippines = (event) => {
        history.push("/philippines");
    }

    const callPprc = (event) => {
        history.push("/pprc-iiftp");
    }

    const callAwards = (event) => {
        history.push("/awards");
    }

    const callContact = (event) => {
        history.push("/contact");
    }

    const callSitemap = (event) => {
        history.push("/site-map");
    }

    return (
        <>
            <div className="homeheader" >
                <h1>DR.V. SUBRAHMANYAN</h1>
                <h3>A man who dedicated his life to research about food science and a founder of many great institutes.</h3>
            </div>

            <div className="wrapper">
                <nav>
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <div className="content">
                        <ul className="links">
                            <li><a href="/">Home</a></li>
                            <li><a onClick={callEarlyLife} >Early Life</a></li>
                            <li>
                                <a onClick={callSoilScience} className="desktop-link">Soil Science</a>
                                <input type="checkbox" id="show-features" />
                                <div style={{ display: 'flex' }} ><a onClick={callSoilScience} className="mobile-link" >Soil Science</a>
                                    <label for="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a onClick={callIisc}>IISC</a></li>
                                    <li><a onClick={callRothamsted}>Rothamsted</a></li>
                                </ul>
                            </li>
                            <li>
                                <a onClick={callFoodTech} className="desktop-link">Food Technology</a>
                                <input type="checkbox" id="show-services" />
                                <div style={{ display: 'flex' }} ><a onClick={callFoodTech} className="mobile-link" >Food Technology</a>
                                    <label for="show-services"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a onClick={callCftri} className="desktop-link">CFTRI</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a onClick={callCftri} className="mobile-link" >CFTRI</a>
                                            <label for="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a onClick={callInfantFood}>Infant Food</a></li>
                                            <li><a onClick={callTapioca}>Tapioca/Cassava</a></li>
                                            <li><a onClick={callSpices}>Spices</a></li>
                                            <li><a onClick={callPencillin}><div>Pencillin, Glucanate and Soluble Casein</div></a></li>
                                        </ul>
                                    </li>
                                    <li><a onClick={callPhilippines}>The Philippines</a></li>
                                    <li><a onClick={callPprc}>PPRC - IIFTP</a></li>
                                </ul>
                            </li>
                            <li><a onClick={callAwards}>Awards</a></li>
                            <li><a onClick={callContact}>Contact</a></li>
                            <li><a onClick={callSitemap}>Site Map</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}
export default Navbar;