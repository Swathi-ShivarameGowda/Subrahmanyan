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
                    <label htmlFor="show-menu" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <div className="content">
                        <ul className="links">
                            <li><a data-cy="menu-home" href="/">Home</a></li>
                            <li><a data-cy="menu-early" onClick={callEarlyLife} >Early Life</a></li>
                            <li>
                                <a data-cy="menu-soil" onClick={callSoilScience} className="desktop-link">Soil Science</a>
                                <input type="checkbox" id="show-features" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-soil1" onClick={callSoilScience} className="mobile-link" >Soil Science</a>
                                    <label htmlFor="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-iisc" onClick={callIisc}>IISC</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Rothamsted</a></li>
                                </ul>
                            </li>
                            <li>
                                <a data-cy="menu-food" onClick={callFoodTech} className="desktop-link">Food Technology</a>
                                <input type="checkbox" id="show-services" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-food1" onClick={callFoodTech} className="mobile-link" >Food Technology</a>
                                    <label htmlFor="show-services"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-cftri" onClick={callCftri} className="desktop-link">CFTRI</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" onClick={callCftri} className="mobile-link" >CFTRI</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callInfantFood}>Infant Food</a></li>
                                            <li><a data-cy="menu-tapioca" onClick={callTapioca}>Tapioca/Cassava</a></li>
                                            <li><a data-cy="menu-spices" onClick={callSpices}>Spices</a></li>
                                            <li><a data-cy="menu-pencillin" onClick={callPencillin}><div>Pencillin, Glucanate and Soluble Casein</div></a></li>
                                        </ul>
                                    </li>
                                    <li><a data-cy="menu-philippines" onClick={callPhilippines}>The Philippines</a></li>
                                    <li><a data-cy="menu-pprc" onClick={callPprc}>PPRC - IIFTP</a></li>
                                </ul>
                            </li>
                            <li><a data-cy="menu-awards" onClick={callAwards}>Awards</a></li>
                            <li><a data-cy="menu-contact" onClick={callContact}>Contact</a></li>
                            <li><a data-cy="menu-sitemap" onClick={callSitemap}>Site Map</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}
export default Navbar;